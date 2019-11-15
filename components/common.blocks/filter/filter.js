modules.define( 'filter',
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
            this._form = this.findChildBlock( Form );
            const _result = this._elem( 'result' );
            const { queryParams } = Querystring.Uri.parse( window.location.href );
            const formData = this.getFormData( queryParams );

            this._form.setVal( formData );
            this._events( this._form ).on( 'change', () => {
              Location.change( { params: this._form.getVal() } );
              const queryTags = this._form.getVal().tags.join( '&tags=' );
              const url = `${ Location._state.url }/api/tags?tags=${ queryTags }`;

              $.get( url ).done( response => {
                const template = BEMHTML.apply( {
                  block: 'filter',
                  elem: 'result',
                  allServices: response,
                  currentLang: this.getValue()
                } );

                bemDom.update(
                  _result.domElem,
                  template
                )
              } )
            } );
          }
        }
      },

      getFormData( queryParams ) {
        return {
          tags: queryParams.tags || []
        }
      }
    } ) );
  } );
