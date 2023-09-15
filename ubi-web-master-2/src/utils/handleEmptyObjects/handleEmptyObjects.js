/**
 * Will ensure that the passed in value always returns an object for desctructuring
 * where null values are flipped to undefined
 *
 * @param {object} data - Arguments to sanitize
 * @returns {object} - Sanitized object
 */
export const handleEmptyObjects = ( data ) => {
  if( typeof data !== 'object' || data === null ){
    return {};
  }

  return Object.keys( data ).reduce( ( acc, key ) => ( {
    ...acc,
    [key]: data[key] ?? undefined
  } ), {} );
};