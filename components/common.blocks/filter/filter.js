modules.define( 'filter',
  [
    'i-bem-dom',
    'form',
    'location',
    'uri__querystring'
  ],
  function( provide, bemDom, Form, Location, Querystring ) {
    provide( bemDom.declBlock( this.name, {
      onSetMod: {
        js: {
          inited() {
            this._form = this.findChildBlock( Form );
            const { queryParams } = Querystring.Uri.parse( window.location.href );
            const formData = this.getFormData( queryParams );

            this._form.setVal( formData );


            this._events( this._form ).on( 'change', () => {
              console.log( 'this._form', this._form.getVal() );
              Location.change( { params: this._form.getVal() } );
            } );
          }
        }
      },

      getFormData( queryParams ) {
        console.log( 'queryParams', queryParams );
        return {
          'filter__basic-tags': queryParams['filter__basic-tags']
        }
      }
    } ) );
  } );
