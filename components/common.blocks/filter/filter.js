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

            function doFilter( forms ) {
              Location.change( { params: forms._form.getVal() } );
              const queryTags = forms._form.getVal().tags.join( '&tags=' );
              const mainUrl = Location._history.state.path;
              const url = `${ mainUrl }/api/tags?tags=${ queryTags }`;

              $.get( url ).done( response => {
                const template = BEMHTML.apply( {
                  block: 'filter',
                  elem: 'result',
                  allServices: ( response || {} ).services,
                  lang: ( response || {} ).currentLang,
                  moreText: ( response || {} ).moreText,
                  servicePriceOutside: ( response || {} ).servicePriceOutside,
                  filterNoResult: ( response || {} ).filterNoResult,
                  currency: ( response || {} ).currency
                } );

                bemDom.update(
                  _result.domElem,
                  template
                )
              } )
            }

            this._events( this._form ).on( 'change', () => {
              if( this._form.getVal().tags.join( '&tags=' ).length > 0 ) {
                doFilter( this );
              }
            } );
            $( document ).ready( () => {
              if( this._form.getVal().tags.join( '&tags=' ).length > 0 ) {
                doFilter( this );
              }
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
