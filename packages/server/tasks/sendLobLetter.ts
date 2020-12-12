const sendLobLetter = async (payload, helpers) => {
  const { addressee, addressor, mergeVariables, fileUrl } = payload;

  const Lob = require('lob')(process.env.LOB_API_KEY);

  const address = { locality: ',' };

  await Lob.letters.create({
    color: false,
    description: `${addressor.name} letter to ${addressee.name}`,
    file: fileUrl,
    from: 'adr_210a8d4b0b76d77b',
    merge_variables: mergeVariables,
    to: {
      address_city: address.locality,
      address_line1: '185 Berry St',
      address_line2: '# 6100',
      address_state: 'CA',
      address_zip: '94107',
      name: 'Harry Zhang',
    },
  });

  helpers.logger.info(`Hi ${name}`);
};

/* eslint-disable-next-line import/no-default-export */
export default sendLobLetter;
