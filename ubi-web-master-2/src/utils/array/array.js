/**
 * The array utility component is used to manipulate array data.
 *
 * @module utils/array
 * @memberof -Common
 */


/**
 * Delete a value inside an array
 * @method arrayDelete
 * @param {object} data - Data arguments
 * @param {array} data.target - Array to modify
 * @param {any} data.search - Value to be searched and deleted in array
*/
export const arrayDelete = ( data ) => {
  const { target, search } = data || {};

  if( !target ){
    return;
  }

  const modified = [...target];

  const index = typeof search === 'function' ? modified.findIndex( search ) : modified.indexOf( search );

  if( index === -1 ){
    return modified;
  }

  modified.splice( index, 1 );
  return modified;
};

/**
 * Removes all of the first targets duplicates while maintaining list size and returns a clean object
 *  However, if the targets aren't found or provided the object as was is returned untouched.
 * @method removeTargetDuplicates
 * @param {object} [object={'id': 1, 'key1': [1, 2, 1, 3], 'key2': ['one', 'two', 'one', 'three']}]
 *        Object to be modified
 * @param {array} [targets=['key1', 'key2']]
 *        Array of at least two targets the first key is the target to dedup the others are to maintain the positions
 * @return {array} - {'id': 1, 'key1': [1,2,3], 'key2': ['one', 'two', 'three']}
*/
export const removeTargetDuplicates = ( object, targets ) => {

  if( !object || !targets || !targets?.every( key => key in object ) ){
    return object;
  }

  let dedupedObject = { ...object };
  let zipList = [];

  targets.every( ( key, index ) => zipList[index] = dedupedObject[key] );

  zipList = zip( ...zipList );
  const filteredZipList = filterZipList( zipList );

  const unzipList = unzip( filteredZipList );
  targets.every( ( key, index ) => dedupedObject[key] = unzipList[index] );

  return dedupedObject;
};

/**
 * Returns back a list without any duplicates
 * @method filterZipList
 * @param {array} [zipList=[[1, 'one'], [1, 'one'], [3, 'three']]]
 * @param {function} [comparitor=(l1,l2, t) => l1[t] === l2[t]] - Should have at least two args and return a boolean
 * @return {array} - [[1, 'one'], [3, 'three']]
*/
const indexComparitor = ( l1, l2, t = 0 ) => l1[t] === l2[t];

export const filterZipList = ( zipList, comparitor = indexComparitor ) => (
  zipList?.filter( ( list, index, arr ) => index === arr.findIndex( l => comparitor( l, list ) ) )
);

/**
 * Zips or Unzips a list of lists of equal length similar to how it's done in python
 * @method zipLambda
 * @param {array} [lists=[[1, 2, 3], ['one', 'two', 'three']]]
 * @return {array} - Response: [[1, 'one'], [2, 'two'], [3, 'three']]
*/
const zipLambda = ( lists ) => lists[0].map( ( _, index ) => lists.map( list => list[index] ) );

/**
 * Creates groups of list of lists with identical positions of idential length
 * @method zip
 * @param {array} lists - [1,2,3], ['one', 'two', 'three']
 *        Takes an unknown number of array arguments
 * @return {array} - [[1,'one'], [2, 'two'], [3, 'three']]
*/
export const zip = ( ...lists ) => {
  if( invalidZipLists( ...lists ) ){
    return [];
  }
  return zipLambda( lists );
};

/**
 * Creates groups of list of lists with identical positions of idential length
 * @method unzip
 * @param {array} zipList - [[1,'one'], [2, 'two'], [3, 'three']]
 *        Takes in an unknown number of array arguments
 * @return {array} - [[1,2,3], ['one', 'two', 'three']]
*/
export const unzip = ( zipList ) => {
  if( invalidZipList( zipList ) ){
    return [];
  }
  return zipLambda( zipList );
};

// Validation
// TODO: Add JSDOCS
const invalidList = ( list ) => {
  return list === undefined || list.constructor !== Array;
};

// TODO: Add JSDOCS
const invalidZipList = ( lists ) => {
  if( invalidList( lists ) || lists.length === 0 ){
    return true;
  }
  let length = lists[0]?.length;
  lists.every( list => {
    const invalidList = list === undefined || list?.constructor !== Array;
    if( invalidList || length !== list?.length ){
      length = 0;
    }
    return length !== 0;
  } );
  if( length === 0 ){
    return true;
  }
  return false;
};

// TODO: Add JSDOCS
const invalidZipLists = ( ...lists ) => {
  if( invalidList( lists ) || lists.length <= 1 ){
    return true;
  }
  return invalidZipList( lists );
};
