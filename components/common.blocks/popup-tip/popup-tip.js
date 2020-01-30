modules.define( 'popup-tip', ['i-bem-dom', 'popup', 'link'], function( provide, bemDom, Popup, Link ) {
  provide( bemDom.declBlock( this.name, {
    onSetMod: {
      js: {
        inited() {
          this._popup = this.findChildBlock( Popup );
          this._link = this.findChildBlock( Link );
          this._domEvents().on( 'mouseover', () => {
            if( this.hasMod( 'popup' ) ) {
              this._popup
                .setAnchor( this._link )
                .setMod( 'visible', true );
            }
          } );
          this._domEvents().on( 'mouseleave', () => {
            if( this.hasMod( 'popup' ) ) {
              this._popup
                .setAnchor( this._link )
                .setMod( 'visible', false );
            }
          } );
        }
      }
    }
  } ) );
} );
