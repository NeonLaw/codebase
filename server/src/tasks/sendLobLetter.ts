import { Node } from 'slate';

const convertSlateToPlaintext = (slateJson: any): string => {
  if (Array.isArray(slateJson)) {
    return slateJson.map(n => Node.string(n)).join('\n');
  }
  return '';
};

export const sendLobLetter = async (payload, helpers) => {
  const { letterId } = payload;

  const { rows } = await helpers.query(
    'SELECT l.id as id, '+
    'l.body as body, '+
    'addressor.lob_identifier as from, '+
    'addressee.lob_identifier as to '+
    'FROM letter l ' +
    'INNER JOIN address addressee ON (addressee.id = l.addressee_id) ' +
    'INNER JOIN address addressor ON (addressor.id = l.addressor_id) ' +
    'WHERE letter.id = $1',
    [letterId]
  );

  const Lob = require('lob')(process.env.LOB_API_KEY);

  const { body, from, to } = rows[0];

  const letter = await Lob.letters.create({
    color: false,
    description: 'Public Letter to Rickie',
    file: '<html style="padding-top: 3in; margin: .5in;">{{body}}</html>',
    from,
    merge_variables: { body: convertSlateToPlaintext(body) },
    to,
  });

  helpers.logger.info(`Hi ${JSON.stringify(letter)}`);
};
