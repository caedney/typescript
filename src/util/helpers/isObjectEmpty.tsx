/**
 * @param { Object } object
 * @return { boolean } - Returns true or false
 */

type TypeProps = {
  [key: string]: any;
};

function isObjectEmpty(object: TypeProps): boolean {
  return Object.keys(object).length > 0;
}

export default isObjectEmpty;
