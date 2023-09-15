import { noExtraSpaces, objectifySassVars } from './Tokens';

describe( 'Utils', () => {
  it( 'should remove extra spaces of a given string.', () => {
    const extraSpaces = 'col col-s-5  col-l-8  '
    expect( noExtraSpaces( extraSpaces ) ).toBe( 'col col-s-5 col-l-8' );
  } );

  it( 'should remove extra spaces of a given string.', () => {
    const extraSpaces = {}
    expect( noExtraSpaces( extraSpaces ) ).toBe( '' );
  } );

  it( 'should return a JS object from a SASS map', () => {
    // SassMap variable after mixin 'mapObject'
    const sassMap = {
      'fire-light': '#ffb499',
      'fire-primary': '#f04c24'
    };
    const palette = {
      fire: {
        light: '#ffb499',
        primary: '#f04c24'
      }
    };

    expect( objectifySassVars( sassMap ) ).toEqual( palette );
  } );

  it( 'should return a JS object from a SASS map with " ', () => {
    // SassMap variable after mixin 'mapObject'
    const sassMap = {
      'fire-light': '"#ffb499"',
      'fire-primary': '"#f04c24"'
    };
    const palette = {
      fire: {
        light: '#ffb499',
        primary: '#f04c24'
      }
    };

    expect( objectifySassVars( sassMap ) ).toEqual( palette );
  } );

  it( 'should false when objectifySassVars is called without params', () => {
    expect( objectifySassVars() ).toBe( false );
  } );
} );