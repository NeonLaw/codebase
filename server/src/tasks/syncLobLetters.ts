const syncLobLetters = async (payload, helpers) => {

  const Lob = require('lob')(process.env.LOB_API_KEY);

  const { since } = payload;

  const letters = since ? await Lob.letters.list({ date_created: since }) :
    await Lob.letters.list();

  const objects = letters.map(letter => (
    {
      id: letter.id,
      json: {
        to: letter.to
      }
    }
  ));

  await helpers.query(
    'SELECT find_or_create_letters_by_lob_identifier($1)',
    [JSON.stringify(objects)]
  );
};

/* eslint-disable-next-line import/no-default-export */
export default syncLobLetters;
