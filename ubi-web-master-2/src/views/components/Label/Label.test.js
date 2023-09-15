import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import React from 'react';

import Label, { defaultProps, propTypes } from './Label';

describe( '<Label />tests', () => {
  it( 'renders without crashing', () => {
    render( <Label /> );
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

    it( 'an instance of Label should have the proper propTypes set', () => {
      expect( Label.propTypes ).toBe( propTypes );
    } );

    it( 'an sintance of Label should have the proper defaultProps', () => {
      expect( Label.defaultProps ).toBe( defaultProps );
    } );

  } );

  describe( 'unit tests', () => {

    it( 'Has Label__Gray class', () => {
      let { container } = render(
        <Label />
      );
      expect( container.querySelectorAll( '.Label' ).length ).toBe( 1 );
      expect( container.querySelectorAll( '.Label__Gray' ).length ).toBe( 1 );
    } );

    it( 'Has not Label__Gray class', () => {
      let { container } = render(
        <Label type='red' />
      );
      expect( container.querySelectorAll( '.Label__Gray' ).length ).toBe( 0 );
    } );

  } );

  describe( 'snapshot tests', () => {

    it( 'renders correctly with the default prop', () => {
      const { LabelComponent } = render( <Label /> );
      expect( LabelComponent ).toMatchSnapshot();
    } );

    it( 'renders correctly with the `type` property set', () => {
      const { LabelComponent } = render( <Label type='gray' /> );
      expect( LabelComponent ).toMatchSnapshot();
    } );

  } );

} );
