modules.define( 'modal-wrap', ['i-bem-dom', 'modal', 'link'], function( provide, bemDom, Modal, Link ) {
  provide( bemDom.declBlock( this.name, {
    onSetMod: {
      js: {
        inited() {
          const modal = this.findChildBlock( Modal );

          this._events( Link ).on( 'click', () => {
            modal.setMod( 'visible', true );
          } );
        }
      }
    }
  } ) );
} );
