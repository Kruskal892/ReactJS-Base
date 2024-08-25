import axios, { AxiosError } from 'axios';

export function isNum(v: string) {
  return /\d/.test(v);
}

export function containsNumbers(str: string) {
  return /\d/.test(str);
}

export function isSpecialCharacter(c: string): boolean {
  return [
    '.',
    '/',
    '<',
    '>',
    ',',
    '?',
    ':',
    ';',
    '"',
    "'",
    '{',
    '}',
    '[',
    ']',
    '|',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '-',
    '_',
    '+',
    '=',
    '~',
    '`',
  ].includes(c);
}

export const isJSON = (str?: string): boolean => {
  try {
    if (!str) return false;
    return JSON.parse(str) && !!str;
  } catch (e) {
    return false;
  }
};

// export const isEmptyObject = (obj: object): boolean => {
//   return isEmpty(obj);
// };

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error);
}

// export const isAllPropsEmpty = (obj: any) => {
//   return _.every(obj, value => {
//     return _.isNil(value) || _.isEmpty(value);
//   });
// };
