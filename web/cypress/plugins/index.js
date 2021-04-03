/// <reference types="cypress" />
import { encrypt } from './encrypt';

module.exports = (on) => {
  on('task', {
    encrypt,
    log(message) {
      console.log(message);

      return null;
    },
    table(message) {
      console.table(message);

      return null;
    }
  });
};
