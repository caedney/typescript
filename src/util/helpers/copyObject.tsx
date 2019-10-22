/**
 * @param { Object } object - An object to copy
 * @return { Object } - Returns a duplicate object
 */

type TypeProps = {
  [key: string]: any;
};

function copyObject(object: TypeProps): TypeProps {
  const output: TypeProps = Array.isArray(object) ? [] : {};

  Object.keys(object).forEach(key => {
    const value = object[key];
    output[key] = typeof value === 'object' ? copyObject(value) : value;
  });

  return output;
}

export default copyObject;
