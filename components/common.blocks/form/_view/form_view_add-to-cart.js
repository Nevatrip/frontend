modules.define( 'form', ['jquery', 'button'], ( provide, $, Button, Form ) => {
  provide( Form.declMod( { modName: 'view', modVal: 'add-to-cart' }, {
    onSetMod: {
      js: {
        inited() {
          this.__base.apply( this, arguments );

          this._events().on( 'success', event => {
            console.log( 'event', event );

            // event.target.domElem[0].submit();
          } );

          this._redirect = this.domElem[0].action;
          this._submit = this.findChildBlock( { block: Button, modName: 'type', modVal: 'submit' } );
          this._added = false;
        }
      }
    },
    _onSubmit( e ) {
      e.preventDefault();

      if( this._added ) {
        window.location.href = this._redirect;
      } else {
        const val = this.getVal();

        $.ajax( {
          type: 'POST',
          url: `https://api.nevatrip.ru/shoppingCarts/${ val.session }/products`,
          data: JSON.stringify( { productId: val.product } ),
          contentType: 'application/json; charset=utf-8'
        } ).done( data => {
          console.log( 'data', data );
          this._added = true;
          this._submit.setText( 'Добавлено 👌' );
          window.location.href = this._redirect;
        } ).fail( err => {
          console.log( 'err', err );
        } );
      }

    }
  } ) );
} );
