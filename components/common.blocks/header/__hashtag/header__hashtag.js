modules.define( 'header__hashtag', [
  'i-bem-dom',
  'button',
  'modal'
], ( provide, bemDom, Button, Modal ) => {
  provide( bemDom.declElem( 'header', 'hashtag', {
    onSetMod: {
      js: {
        inited() {
          const button = this.findChildBlock( Button );
          const modal = this.findChildBlock( Modal );

          this._domEvents( button ).on( 'click', () => {
            modal
              .setContent( '!!!' )
              .setMod( 'visible' )
          } )
        }
      }
    }
  } ) );
} );
