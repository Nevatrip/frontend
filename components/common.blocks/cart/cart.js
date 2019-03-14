modules.define( 'cart', ['i-bem-dom'], function( provide, bemDom ) {
  provide( bemDom.declBlock( this.name, {
    onSetMod: {
      js: {
        inited() {
          console.log( '↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓' );
          console.log( '123' );
          console.log( '↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_' );
          this.on( 'hover', () => {
            this._elem( 'content' ).toggleMod( 'visible' )
          } );
        }
      }
    }
  } ) );
} );
