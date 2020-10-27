const createLetter = async (payload, helpers) => {
  // const { letterId } = payload;
  // const { addresseeId } = payload;
  // addressorId, addressee, addressor, fileUrl } = payload;

  helpers.logger.info(`Sending letter to ${payload.addressee}`);

  // --data-urlencode
  // "file=https://s3-us-west-2.amazonaws.com/
  // public.lob.com/assets/us_letter_1pg.pdf"
  // \

  // await sendHttpPost( { 'double_sided': 'true', 'address_placement':
  // 'insert_blank_page', 'color': 'false', 'description':
  // '20201004-letter-to-rickie', 'to': 'adr_8d45057e4fe36b89', 'from':
  // 'adr_01440c4aff469c4b', 'file': { 'filename':
  // '20201014-note-to-rickie.pdf', 'path':
  // '/tmp/lob-assets/1602719112602-1-4bd4efb6d0403081', 'headers': {
  // 'content-disposition': 'form-data; name="file";
  // filename="20201014-note-to-rickie.pdf"', 'content-type': 'application/pdf'
  // }, 'bytes': 230831 } } ).then(() => { helpers.logger.info(`Sending letter
  // to ${payload.addressee}`); });
};

export default createLetter;
