import { printPage } from './printUtils.js'

describe( 'printPage', () => {
  it( 'should call print method', function(){
    const printMock = jest.fn();
    window.print = printMock;
    document.body.innerHTML = '<div id=someId>test</div>'
    printPage( { divId: 'someId' } )
    expect( printMock ).toBeCalled();
  } );

  it( 'should not pass divId', function(){
    const printMock = jest.fn();
    window.print = printMock;

    printPage( );
    expect( printMock ).not.toBeCalled();

  } );

  it( 'should pass wrong divId', function(){
    const printMock = jest.fn();
    window.print = printMock;
    document.body.innerHTML = '<div id=someId>okokx</div>'
    printPage( { divId: 'wrongId' } )

    expect( printMock ).not.toBeCalled();

  } );

} );