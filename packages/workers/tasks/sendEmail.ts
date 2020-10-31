const sendEmailJob = async (payload, helpers) => {
  const { name } = payload;
  helpers.logger.info(`Hi ${name}`);
};

export default sendEmailJob;
