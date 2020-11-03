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
    `SELECT find_or_create_letter_by_lob_identifier(el->>'uuid', el->'json')
     FROM json_array_elements($1) uuid`,
    [JSON.stringify(objects)]
  );


  since ?
    helpers.logger.info(`synced letters from Lob since ${since}`) :
    helpers.logger.info('synced letters from Lob');
};

export default syncLobLetters;
