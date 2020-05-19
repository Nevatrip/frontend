modules.define( 'modal__close', [
  'i-bem-dom',
  'button'
], ( provide, bemDom, Button ) => {
  provide( bemDom.declElem( 'modal', 'close', {
    onSetMod: {
      js: {
        inited() {
          this._domEvents( this.findMixedBlock( Button ) ).on( 'click', () => {
            this._block().delMod( 'visible' );
          } )
        }
      }
    }
  } ) );
} );
