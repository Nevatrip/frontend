modules.define( 'button', ['page', 'modal', 'i-bem-dom', 'BEMHTML'], ( provide, Page, Modal, bemDom, BEMHTML, Button ) => {
  provide( Button.declMod( { modName: 'action', modVal: 'modal' }, {
    onSetMod: {
      js: {
        inited() {
          this._modal = this.findParentBlock( Page )._elem( 'modal' ).findMixedBlock( Modal );

          console.log( '∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞' );
          console.log( 'this.domElem: ', this.domElem );
          console.log( 'this._modal: ', this._modal );
          console.log( 'this._close: ', this.findParentBlock( Page )._elem( 'modal-close' ) );

          console.log( 'ˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆ' );

          this._domEvents().on( 'click', () => {
            if( this._modal.hasMod( 'visible', true ) ) {
              this._modal
                .setContent( '' )
                .setMod( 'visible', false );
            } else {
              this._modal
                .setContent( BEMHTML.apply( this.params.content ) )
                .setMod( 'visible', true );
            }
          } );

          this._modal._domEvents().on( 'click', e => {
            if( e.target !== this._modal.findChildElem( 'content' ).domElem[0] ) {
              if( this._modal.hasMod( 'visible', true ) ) {
                this._modal
                  .setContent( '' )
                  .setMod( 'visible', false );
              } else {
                this._modal
                  .setContent( BEMHTML.apply( this.params.content ) )
                  .setMod( 'visible', true );
              }
            }
          } );
        }
      }
    }
  } ) );
} );
