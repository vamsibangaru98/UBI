import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Divider, { defaultProps, propTypes } from './Divider';

const consoleSpy = jest.spyOn( console, 'error' );

describe( '<Divider />tests', () => {
  it( 'renders without crashing', () => {
    render(<Divider />);
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

    it( 'an instance of Divider should have the proper propTypes set', () => {
      expect( Divider.propTypes ).toBe( propTypes );
    } );

    it( 'an sintance of Divider should have the proper defaultProps', () => {
      expect( Divider.defaultProps ).toBe( defaultProps );
    } );

  } );

  describe( 'unit tests', () => {

    it('Has Divider__Gray class', () => {
      let { container } = render(
        <Divider />
      );
      expect( container.querySelectorAll( '.Divider' ).length ).toBe( 1 );
      expect( container.querySelectorAll( '.Divider__Gray' ).length ).toBe( 1 );
    });

    it('Has not Divider__Gray class', () => {
      let { container } = render(
        <Divider type='red' />
      );
      expect( container.querySelectorAll( '.Divider__Gray' ).length ).toBe( 0 );
    });

  } );

  describe( 'snapshot tests', () => {

    it( 'renders correctly with the default prop', () => {
      const { dividerComponent } = render( <Divider /> );
      expect( dividerComponent ).toMatchSnapshot();
    } );

    it( 'renders correctly with the `type` property set', () => {
      const {dividerComponent} = render( <Divider type='gray' /> );
      expect( dividerComponent ).toMatchSnapshot();
    } );

  } );

} );
