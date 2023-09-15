import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import React from 'react';

import InputBox, { defaultProps, propTypes } from './InputBox';

const consoleSpy = jest.spyOn( console, 'error' );

describe( '<InputBox />tests', () => {
  it( 'renders without crashing', () => {
    render( <InputBox /> );
  } );

  describe( 'properties', () => {
    it( 'should have the proper amount of propTypes', () => {
      let keys = ['type'];
      expect( Object.keys( propTypes ).length ).toBe( keys.length );
      keys.forEach( ( i )=>{
        expect( propTypes[i] ).toBeTruthy();
      } );
    } );

    it( 'should have the proper defaultProps', ()=> {
      expect(
        JSON.stringify( {
          type: 'gray'
        } )
      ).toEqual( JSON.stringify( defaultProps ) );
    } );

    it( 'an instance of InputBox should have the proper propTypes set', () => {
      expect( InputBox.propTypes ).toBe( propTypes );
    } );

    it( 'an sintance of InputBox should have the proper defaultProps', () => {
      expect( InputBox.defaultProps ).toBe( defaultProps );
    } );

  } );

  describe( 'unit tests', () => {

    it( 'Has Divider__Gray class', () => {
      let { container } = render(
        <InputBox />
      );
      expect( container.querySelectorAll( '.InputBox' ).length ).toBe( 1 );
      expect( container.querySelectorAll( '.Divider__Gray' ).length ).toBe( 1 );
    } );

    it( 'Has not Divider__Gray class', () => {
      let { container } = render(
        <InputBox type='red' />
      );
      expect( container.querySelectorAll( '.Divider__Gray' ).length ).toBe( 0 );
    } );

  } );

  describe( 'snapshot tests', () => {

    it( 'renders correctly with the default prop', () => {
      const { dividerComponent } = render( <InputBox /> );
      expect( dividerComponent ).toMatchSnapshot();
    } );

    it( 'renders correctly with the `type` property set', () => {
      const { dividerComponent } = render( <InputBox type='gray' /> );
      expect( dividerComponent ).toMatchSnapshot();
    } );

  } );

} );
