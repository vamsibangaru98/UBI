/**
 * superscriptText function for formatting the character
 * @method
 * @param {object} data - Passing required data as an argument
 */
export const superscriptText = ( data ) => {
  const { title, character } = data || {};
  if( !title || !character ){
    return '';
  }
  const str = title.split( character );
  return <>{ str[0] }<sup>{ character }</sup>{ str[1] }</>;
};