modules.define( 'navigation', ['i-bem-dom'], function( provide, bemDom ) {
  provide( bemDom.declBlock( this.name, {
    onSetMod: {
      js: {
        inited() {
          this._elems( 'toggle' ).forEach( btn => {
            btn._domEvents().on( 'click', () => {
              this._elem( 'content' ).toggleMod( 'visible' )
            } );
          } )
        }
      }
    }
  } ) );
} );
