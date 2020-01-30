modules.define( 'cart',
  [
    'i-bem-dom',
    'form',
    'location',
    'uri__querystring',
    'jquery',
    'BEMHTML'
  ],
  function( provide, bemDom, Form, Location, Querystring, $, BEMHTML ) {
    provide( bemDom.declBlock( this.name, {
      onSetMod: {
        js: {
          inited() {
            //this._form = this.findChildBlock( Form );

            console.log( '∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞' );
            console.log( 'this: ', this );

            console.log( 'ˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆ' );
          }
        },
        _getDefaultParams() {
          return {
            param1: 'val1',
            param2: 'val2'
          }
        }
      }
    } ) );
  } );
