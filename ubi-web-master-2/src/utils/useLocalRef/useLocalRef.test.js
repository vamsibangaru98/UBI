import { renderHook } from '@testing-library/react';

import { useLocalRef } from './useLocalRef';

describe( 'useLocalRef', () => {
  it( 'should return a ref when passed nothing', () => {
    const { result: { current: localRef } } = renderHook( () => useLocalRef() );
    expect( localRef ).toStrictEqual( { current: undefined } );
  } );

  it( 'should return the passed in ref', () => {
    const ref = { current: 'i exist' };
    const { result: { current: localRef } } = renderHook( () => useLocalRef( { ref } ) );
    expect( localRef ).toStrictEqual( ref );
  } );
} );