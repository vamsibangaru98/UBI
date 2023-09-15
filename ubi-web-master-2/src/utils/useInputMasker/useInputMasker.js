/**
 * useInputMasker a custom hook, which accepts a value and formatter object and returns the modified value.Import useInputMasker into InputField, and revise the handleChange method&#x27;s code to conditionally call useInputMasker if the &#x27;formatter&#x27; property object exists, to format the InputField value display.
 *
 * @module utils/UseInputMasker
 */

import VMasker from 'vanilla-masker';
/**
 * Returns string when it is called
 *
 * @method
 * @param { string } val - Accepts a value returns the modified value
 * @param { object } formatter - Accepts a formatter object
 * @returns { string }
 */

export const UseInputMasker = function( val, formatter ){

  const data = val;
  const numberValue = parseInt( data, 10 );
  const charLength = data.length;
  if( !formatter ){
    return data;
  }
  switch ( true ){
    case formatter.hasOwnProperty( 'pattern' ):
      return VMasker.toPattern( data, formatter.pattern );

    case formatter.hasOwnProperty( 'creditcard' ):
      if( data.match( /^3[47]/ ) ){
        return VMasker.toPattern( data, '9999 999999 99999' );
      }
      else {
        return VMasker.toPattern( data, '9999 9999 9999 9999' );
      }

    case formatter.hasOwnProperty( 'expiry' ):
      if( charLength === 2 && data.match( /^[0-9]{2}/ ) ){
        return data + '/'
      }
      else {
        return VMasker.toPattern( data, '99/99' );

      }
    case formatter.hasOwnProperty( 'dob' ):
      if( charLength === 1 && numberValue > 1 ){
        return '0' + data + '/';
      }
      else if( charLength === 2 && data.match( /^[0-9]{2}/ ) ){
        if( numberValue > 12 ){
          return 12;
        }
        else {
          return data;
        }
      }
      else if( charLength === 3 && data.charAt( 2 ) !== '/' && parseInt( data.charAt( 2 ), 10 ) > 3 ){

        return data.charAt( 0 ) + data.charAt( 1 ) + '/';

      }
      else if( charLength === 4 && parseInt( data.charAt( 3 ), 10 ) > 3 ){

        return data.slice( 0, charLength - 1 );

      }
      else if( charLength === 5 && parseInt( data.charAt( 3 ), 10 ) > 2 && parseInt( data.charAt( 4 ), 10 ) > 1 ){

        return data.slice( 0, charLength - 1 );

      }
      else {

        return VMasker.toPattern( data, '99/99' );

      }
    case formatter.hasOwnProperty( 'phone' ):
      return VMasker.toPattern( data, '(999) 999-9999' );

    case formatter.hasOwnProperty( 'giftcard' ):
      return VMasker.toPattern( data, '9999 9999 9999 9999' );
    default:
      return data;
  }

}

/**
 * inputMasker is a custom hook, which accepts a value and formatter object and returns the modified value.Import inputMasker into InputField, and revise the handleChange method code to conditionally call inputMasker if the formatter property object exists, to format the InputField value display.
 *
 * Returns a string when it is called
 *
 * @method
 * @param { string } val - Accepts a value returns the modified value
 * @param { object } formatter - Accepts a formatter object
 * @returns { string }
 */

export const InputMasker = function( val, formatter ){

  if( formatter?.pattern ){
    return VMasker.toPattern( val, formatter.pattern );
  }
}

