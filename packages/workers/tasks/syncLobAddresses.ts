const syncLobAddresses = async (payload, helpers) => {
  const Lob = require('lob')(process.env.LOB_API_KEY);

  const addresses = await Lob.addresses.list();

  for (const address of addresses) {
    await helpers.query(
      `SELECT find_or_create_address(
        ${address.id},
        ${address.address_line1},
        ${address.address_city},
        ${address.address_state},
        ${address.address_zip},
        ${address.address_country}
      );`
    );
  }

  helpers.logger.info(`Hi ${name}`);
};

/* eslint-disable-next-line import/no-default-export */
export default syncLobAddresses;
