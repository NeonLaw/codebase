export const downloadLobLetters = async (_, helpers) => {
  helpers.logger.info('Downloading Lob Letters');

  const Lob = require('lob')(process.env.LOB_API_SECRET);

  const lobPayload = await Lob.letters.list({ limit: 100 });

  const letters = lobPayload.data;

  letters.forEach(async (letter) => {
    await helpers.query(
      'INSERT INTO lob.letter (lob_identifier) VALUES ($1) '+
      'ON CONFLICT DO NOTHING '+
      'RETURNING (id)',
      [letter.id]
    );

    await helpers.query(
      'INSERT INTO lob.address (lob_identifier) VALUES ($1) '+
      'ON CONFLICT DO NOTHING '+
      'RETURNING (id)',
      [letter.from.id]
    );

    await helpers.query(
      'UPDATE lob.address SET description = $1, '+
      'created_at = $2, '+
      'updated_at = $3, '+
      'route = $4, '+
      'city = $5, '+
      'country = $6, '+
      'zip = $7, '+
      'state = $8 '+
      'WHERE lob_identifier = $9;',
      [
        letter.from.description,
        letter.from.date_created,
        letter.from.date_modified,
        letter.from.address_line1,
        letter.from.address_city,
        letter.from.address_country,
        letter.from.address_zip,
        letter.from.address_state,
        letter.from.id
      ]
    );

    await helpers.query(
      'UPDATE lob.address SET description = $1, '+
      'created_at = $2, '+
      'updated_at = $3, '+
      'route = $4, '+
      'city = $5, '+
      'country = $6, '+
      'zip = $7, '+
      'state = $8 '+
      'WHERE lob_identifier = $9;',
      [
        letter.to.description,
        letter.to.date_created,
        letter.to.date_modified,
        letter.to.address_line1,
        letter.to.address_city,
        letter.to.address_country,
        letter.to.address_zip,
        letter.to.address_state,
        letter.to.id
      ]
    );

    await helpers.query(
      'INSERT INTO lob.address (lob_identifier) VALUES ($1) '+
      'ON CONFLICT DO NOTHING '+
      'RETURNING (id)',
      [letter.to.id]
    );

    await helpers.query(
      'UPDATE lob.letter SET description = $1, '+
      'created_at = $2, '+
      'updated_at = $3, '+
      'url = $4, '+
      'address_placement = $5, '+
      'color = $6, '+
      'double_sided = $7, '+
      'from_address_identifier = $8, '+
      'to_address_identifier = $9 '+
      'WHERE lob_identifier = $10;',
      [
        letter.description,
        letter.date_created,
        letter.date_modified,
        letter.url.split('?')[0],
        letter.address_placement,
        letter.color,
        letter.double_sided,
        letter.from.id,
        letter.to.id,
        letter.id
      ]
    );
  });
};
