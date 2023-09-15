import { handleEmptyObjects } from './handleEmptyObjects';

describe( 'handleEmptyObjects()', () => {
  it( 'should not throw', () => {
    expect( handleEmptyObjects ).not.toThrow();
  } );

  it( 'should always return an object', () => {
    const args = [null, {}, undefined, true, false, 'string', 123, 123.55, () => {}];
    args.forEach( data => {
      expect( handleEmptyObjects( data ) ).toStrictEqual( {} );
    } );
  } );

  it( 'should flip null to undefined', () => {
    const data = {
      props: null,
      meta: undefined,
      action: {},
      random: 'string'
    };

    expect( handleEmptyObjects( data ) ).toStrictEqual( {
      props: undefined,
      meta: undefined,
      action: data.action,
      random: data.random
    } );
  } );

  it( 'should support fallbacks of any type when destructuring children', () => {
    const data = {
      obj: null,
      boolTrue: null,
      boolFalse: null,
      number: null,
      string: null,
      array: null
    };

    const {
      obj = {},
      boolTrue = true,
      boolFalse = false,
      number = 123,
      string = 'string',
      array = [],
      didntExist = 3.14
    } = handleEmptyObjects( data );

    expect( obj ).toStrictEqual( {} );
    expect( boolTrue ).toStrictEqual( true );
    expect( boolFalse ).toStrictEqual( false );
    expect( number ).toStrictEqual( 123 );
    expect( string ).toStrictEqual( 'string' );
    expect( array ).toStrictEqual( [] );
    expect( didntExist ).toStrictEqual( 3.14 );
  } );
} );
