modules.define( 'filter', ['i-bem-dom', 'checkbox-group'], function( provide, bemDom, checkboxGroup ) {
  provide( bemDom.declBlock( this.name, {
    onSetMod: {
      js: {
        inited() {
          let selectedTags = [];

          this._domEvents().on( 'change', () => {
            this._checkboxGroup = this.findChildBlock( checkboxGroup );
            selectedTags = this._checkboxGroup._val;
            console.log( 'selectedTags: ', selectedTags );//предыдущее состояние
          } );
        }
      }
    }
  } ) );
} );
