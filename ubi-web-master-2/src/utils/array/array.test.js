import * as utils from './array';

describe( 'The arrayDelete method', () => {
  it( 'should fail silently', () => {
    expect( utils.arrayDelete ).not.toThrow();
  } );
  it( 'should return same array if search index not found', () => {
    const data = {
      target: [1, 2, 3],
      search: 5
    };
    expect( utils.arrayDelete( data ) ).toStrictEqual( [...data.target] );
  } );
  it( 'should return array with replaced values', () => {
    const data = {
      target: [1, 2, 3],
      search: 2
    };
    const expected = [1, 3];
    expect( utils.arrayDelete( data ) ).toStrictEqual( expected );
  } );
  it( 'should return array with replaced value', () => {
    const search = ( e ) => {
      return e === 2;
    };
    const data = {
      target: [1, 2, 3],
      search
    };
    const expected = [1, 3];
    expect( utils.arrayDelete( data ) ).toStrictEqual( expected );
  } );
} );

describe( 'The zip method', () => {
  it( 'should fail silently', () => {
    expect( utils.zip ).not.toThrow();
  } );
  it( 'should return empty array if none are given given', () => {
    const list1 = [];
    const list2 = [[], []];
    const list3 = [[1, 2], [], [2, 3]];
    const list4 = [[], [1, 2], [2, 3]];
    const list5 = [{}, [1, 2], [2, 3]];
    const expected = [];
    expect( utils.zip( undefined ) ).toStrictEqual( expected );
    expect( utils.zip( ...list1 ) ).toStrictEqual( expected );
    expect( utils.zip( ...list2 ) ).toStrictEqual( expected );
    expect( utils.zip( ...list3 ) ).toStrictEqual( expected );
    expect( utils.zip( ...list4 ) ).toStrictEqual( expected );
    expect( utils.zip( ...list5 ) ).toStrictEqual( expected );
  } );
  it( 'should return new array with same pos', () => {
    const expectedList0 = [[1, 'one'], [2, 'two']];
    expect( utils.zip( [1, 2], ['one', 'two'] ) ).toStrictEqual( expectedList0 );

    const lists1 = [[1, 2, 3], ['one', 'two', 'three'], ['foo', 'foo', 'foo']];
    const expectedList1 = [[1, 'one', 'foo'], [2, 'two', 'foo'], [3, 'three', 'foo']];
    expect( utils.zip( ...lists1 ) ).toStrictEqual( expectedList1 );
  } );
} );

describe( 'The unzip method', () => {
  it( 'should fail silently', () => {
    expect( utils.unzip ).not.toThrow();
  } );
  it( 'should return empty array if none are given given', () => {
    const list1 = [];
    const list2 = [[], []];
    const list3 = [[1, 2], []];
    const list4 = [[], [1, 2]];
    const list5 = [{}, [1, 2], [2, 3]];
    const expected = [];
    expect( utils.unzip( undefined ) ).toStrictEqual( expected );
    expect( utils.unzip( list1 ) ).toStrictEqual( expected );
    expect( utils.unzip( list2 ) ).toStrictEqual( expected );
    expect( utils.unzip( list3 ) ).toStrictEqual( expected );
    expect( utils.unzip( list4 ) ).toStrictEqual( expected );
    expect( utils.unzip( list5 ) ).toStrictEqual( expected );
  } );
  it( 'should return new array with same unzipped postions', () => {
    const expectedList0 = [[1, 'one'], [2, 'two']];
    expect( utils.zip( [1, 2], ['one', 'two'] ) ).toStrictEqual( expectedList0 );

    const list1 = [[1, 'one', 'foo'], [2, 'two', 'foo'], [3, 'three', 'foo']];
    const expected = [[1, 2, 3], ['one', 'two', 'three'], ['foo', 'foo', 'foo']];
    expect( utils.unzip( list1 ) ).toStrictEqual( expected );
  } );
} );

describe( 'Filter Zip List', () => {
  it( 'should fail silently', () => {
    expect( utils.filterZipList ).not.toThrow();
  } );
  it( 'should remove duplicates based one the first index', () => {
    const zipList = [[1, 'one', 'foo'], [1, 'one', 'foo'], [3, 'three', 'foo']];
    const expectedFilter = [[1, 'one', 'foo'], [3, 'three', 'foo']];
    const filteredList = utils.filterZipList( zipList )
    expect( filteredList ).toStrictEqual( expectedFilter );
  } );
} );

describe( 'The removeDuplicates method', () => {
  it( 'should fail silently', () => {
    expect( utils.removeTargetDuplicates ).not.toThrow();
  } );
  it( 'should fail without side effects', () => {
    const object1 = {
      'metadata': { 'id': 1 },
      'group': ['brand', 'brand', 'brand'],
      'label': ['Almay', 'Almay', 'Anastasia']
    };
    const result = utils.removeTargetDuplicates( object1, [] );
    expect( result ).toStrictEqual( object1 );
    const result2 = utils.removeTargetDuplicates( object1, ['badGroup', 'badKey'] );
    expect( result2 ).toStrictEqual( object1 );
    const result3 = utils.removeTargetDuplicates( object1, ['group', 'badKey'] );
    expect( result3 ).toStrictEqual( object1 );
    const result4 = utils.removeTargetDuplicates( object1, ['badGroup', 'label'] );
    expect( result4 ).toStrictEqual( object1 );
  } );
  it( 'should return new object with removed duplicates', () => {

    const object1 = {
      'metadata': { 'id': 1 },
      'group': ['brand', 'brand', 'brand'],
      'label': ['Almay', 'Almay', 'Anastasia']
    };
    const targets = ['label', 'group'];
    const expectedObject = {
      'metadata': { 'id': 1 },
      'group': ['brand', 'brand'],
      'label': ['Almay', 'Anastasia']
    };

    const dedupedObject2 = utils.removeTargetDuplicates( object1, targets );
    expect( dedupedObject2 ).toStrictEqual( expectedObject );
  } );
} );