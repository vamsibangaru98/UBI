/**
 * @jest-environment node
 */

import * as utils from './useInputMasker';

describe( 'UseInputMasker', () => {

  describe( 'handleUseInputMasker', () => {

    it( 'should format data based on pattern', () => {
      const mockValue = '1234567890123456';
      const mockFormatter = { 'pattern':'9999-9999-9999-9999' };
      expect( utils.UseInputMasker( mockValue, mockFormatter ) ).toEqual( '1234-5678-9012-3456' );
    } );

    it( 'should format creditcard data', () => {
      let mockValue = '1234567890123456';
      const mockFormatter = { 'creditcard':1 };
      expect( utils.UseInputMasker( mockValue, mockFormatter ) ).toEqual( '1234 5678 9012 3456' );
      mockValue = '378282246310005';
      expect( utils.UseInputMasker( mockValue, mockFormatter ) ).toEqual( '3782 822463 10005' );
    } );

    it( 'should format expiry data', () => {
      let mockValue = '1234';
      const mockFormatter = { 'expiry':1 };
      expect( utils.UseInputMasker( mockValue, mockFormatter ) ).toEqual( '12/34' );
      mockValue = '12';
      expect( utils.UseInputMasker( mockValue, mockFormatter ) ).toEqual( '12/' );
    } );

    it( 'should format date of birth data', () => {
      let mockValue = '1231';
      const mockFormatter = { 'dob':1 };
      expect( utils.UseInputMasker( mockValue, mockFormatter ) ).toEqual( '12/31' );
      mockValue = '12';
      expect( utils.UseInputMasker( mockValue, mockFormatter ) ).toEqual( '12' );
      mockValue = '2';
      expect( utils.UseInputMasker( mockValue, mockFormatter ) ).toEqual( '02/' );
      mockValue = '12/33';
      expect( utils.UseInputMasker( mockValue, mockFormatter ) ).toEqual( '12/3' );
      mockValue = '15';
      expect( utils.UseInputMasker( mockValue, mockFormatter ) ).toEqual( 12 );
    } );

    it( 'should format phone data', () => {
      let mockValue = '1234567890';
      const mockFormatter = { 'phone':1 };
      expect( utils.UseInputMasker( mockValue, mockFormatter ) ).toEqual( '(123) 456-7890' );
      mockValue = '1234';
      expect( utils.UseInputMasker( mockValue, mockFormatter ) ).toEqual( '(123) 4' );
    } );

    it( 'should format giftcard data', () => {
      let mockValue = '1234567890123456';
      const mockFormatter = { 'giftcard':{} };
      expect( utils.UseInputMasker( mockValue, mockFormatter ) ).toEqual( '1234 5678 9012 3456' );
    } );

    it( 'should return if passed the value', () => {
      let mockValue = '1234';
      expect( utils.UseInputMasker( mockValue ) ).toBeTruthy();
    } );

  } );

} );

describe( 'InputMasker', () => {

  describe( 'handleInputMasker', () => {

    it( 'should format data based on pattern (mobile number)', () => {
      const mockValue = '1234567890';
      const mockFormatter = { 'pattern':'999-999-9999' };
      expect( utils.InputMasker( mockValue, mockFormatter ) ).toEqual( '123-456-7890' );
    } );

    it( 'should format data based on pattern ( visa credit card )', () => {
      const mockValue = '1234567890123456';
      const mockFormatter = { 'pattern':'9999-9999-9999-9999' };
      expect( utils.InputMasker( mockValue, mockFormatter ) ).toEqual( '1234-5678-9012-3456' );
    } );

    it( 'should format data based on pattern ( amex credit card )', () => {
      const mockValue = '1234567890123456';
      const mockFormatter = { 'pattern':'9999-9999999-99999' };
      expect( utils.InputMasker( mockValue, mockFormatter ) ).toEqual( '1234-5678901-23456' );
    } );

  } );

} );

