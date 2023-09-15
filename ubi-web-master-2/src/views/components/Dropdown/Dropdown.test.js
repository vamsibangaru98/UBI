import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import React from 'react';

import Dropdown, { defaultProps, propTypes } from './Dropdown';

const consoleSpy = jest.spyOn( console, 'error' );

describe( '<Dropdown />tests', () => {
  it( 'renders without crashing', () => {
    render( <Dropdown /> );
  } );

  describe( 'properties', () => {
    it( 'should have the proper defaultProps', ()=> {
      expect(
        JSON.stringify( {
          variant: 'filled',
          dropdownItems:[{ label:'Ten', value:10 }, { label:'Twenty', value:20 }, { label:'Thirty', value:30 }]
        } )
      ).toEqual( JSON.stringify( defaultProps ) );
    } );

    it( 'an instance of Dropdown should have the proper propTypes set', () => {
      expect( Dropdown.propTypes ).toBe( propTypes );
    } );

    it( 'an sintance of Dropdown should have the proper defaultProps', () => {
      expect( Dropdown.defaultProps ).toBe( defaultProps );
    } );

  } );
} );
