/**
 * @param { Object } classNames - An object of classNames
 * @return {( string | undefined )} - Returns a class string or undefined
 */

type TypeProps = {
  [key: string]: boolean;
};

function getClassNames(classNames: TypeProps): string | undefined {
  const classes = Object.keys(classNames)
    .filter(key => classNames[key])
    .join(' ');

  return classes.length > 0 ? classes : undefined;
}

export default getClassNames;
