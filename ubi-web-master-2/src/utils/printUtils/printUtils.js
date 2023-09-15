/**
 * printPage onClick handler function to print the coupon
 *
 * @method printPage
 * @param {object} data
 * @returns {undefined}
 */

export const printPage = ( data ) => {
  if( !data?.divId || !window || !document ){
    return
  }
  const content = document.getElementById( data.divId )?.innerHTML
  if( !content ){
    return
  }
  document.body.innerHTML = content;
  window.print();
  window.location.reload();
}