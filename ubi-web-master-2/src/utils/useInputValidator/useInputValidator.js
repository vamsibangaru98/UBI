/**
 * useInputValidator a custom hook which is called inside the handleBlur setTimeout method, passing the input element type, value and isRequired value. Logic for the hook is If isRequired is true and input value is empty, should set errMessage to requiredText and setIsError to true and If input type is either email or password, should make an async DXL call to validate the value.
 *
 * @module utils/UseInputValidator
 */


/**
 * Returns true when it is called
 *
 * @method
 * @returns { boolean }
 */

export const isEmpty = ( str )=>{
  return !str || !/[^\s]+/.test( str );
}


export const UseInputValidator = ( val, isRequired )=>{
  if( isEmpty( val ) && isRequired ){
    return false;
  }
  else {
    return true;
  }
}
