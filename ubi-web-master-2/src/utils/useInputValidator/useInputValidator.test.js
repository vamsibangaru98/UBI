/**
 * @jest-environment node
 */

import * as utils from './useInputValidator';

describe( 'UseInputValidator', () => {

  describe( 'handleUseInputValidator', () => {

    it( 'should return false when called with an empty string and isRequired is true', () => {
      expect( utils.UseInputValidator( '', true ) ).toBeFalsy();
    } );

    it( 'should return true when called with only a string value', () => {
      expect( utils.UseInputValidator( 'mockValue' ) ).toBeTruthy();
    } );

    it( 'should return true when called with an empty string and isRequired is not passed', () => {
      expect( utils.UseInputValidator( '' ) ).toBeTruthy();
    } );

  } );

} );

