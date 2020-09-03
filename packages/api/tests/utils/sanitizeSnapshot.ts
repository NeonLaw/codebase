import { beforeEach } from '@jest/globals';

let known: Record<
  string,
  { counter: number; values: Map<unknown, string> }
> = {};

beforeEach(() => {
  known = {};
});

/*
 * This function replaces values that are expected to change with static
 * placeholders so that our snapshot testing doesn't throw an error
 * every time we run the tests because time has ticked on in it's inevitable
 * march toward the future.
 */

export const sanitize = (json: any): any => {
  /*
   * This allows us to maintain stable references whilst dealing with variable
   * values
   * @param value
   * @param type
   */

  /**
   * @param value
   * @param type
   */
  function mask(value: unknown, type: string) {
    if (!known[type]) {
      known[type] = { counter: 0, values: new Map() };
    }
    const o = known[type];
    if (!o.values.has(value)) {
      o.values.set(value, `[${type}-${++o.counter}]`);
    }
    return o.values.get(value);
  }

  if (Array.isArray(json)) {
    return json.map((val) => sanitize(val));
  } else if (json && typeof json === 'object') {
    const result = { ...json };
    for (const k in result) {
      if (k === 'nodeId' && typeof result[k] === 'string') {
        result[k] = mask(result[k], 'nodeId');
      } else if (
        k === 'id' ||
        k === 'uuid' ||
        (k.endsWith('Id') &&
          (typeof json[k] === 'number' || typeof json[k] === 'string')) ||
        (k.endsWith('Uuid') && typeof k === 'string')
      ) {
        result[k] = mask(result[k], 'id');
      } else if (
        (k.endsWith('At') || k === 'datetime') &&
        typeof json[k] === 'string'
      ) {
        result[k] = mask(result[k], 'timestamp');
      } else if (
        k.match(/^deleted[A-Za-z0-9]+Id$/) &&
        typeof json[k] === 'string'
      ) {
        result[k] = mask(result[k], 'nodeId');
      } else if (k === 'email' && typeof json[k] === 'string') {
        result[k] = mask(result[k], 'email');
      } else if (k === 'username' && typeof json[k] === 'string') {
        result[k] = mask(result[k], 'username');
      } else {
        result[k] = sanitize(json[k]);
      }
    }
    return result;
  } else {
    return json;
  }
};
