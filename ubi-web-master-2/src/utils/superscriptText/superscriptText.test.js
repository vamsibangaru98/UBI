import { mount } from '../jest/jest';
import { superscriptText } from './superscriptText';

describe( 'superscriptText', () => {
  const mockObject = {
    title: 'abcd®efgh',
    character: '®'
  };

  it( 'should not throw', () => {
    expect( superscriptText ).not.toThrow();
  } );

  it( 'should return the superscripted character', () => {
    const { container } = mount( superscriptText( mockObject ) );
    expect( container.querySelector( 'sup' ) ).toHaveTextContent( mockObject.character );
  } );
} );