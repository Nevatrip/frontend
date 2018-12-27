modules.define( 'list', [
  'page',
  'modal',
  'review'
], ( provide, Page, Modal, Review, List ) => {
  provide( List.declMod( { modName: 'of', modVal: 'reviews' }, {
    onSetMod: {
      js: {
        inited() {
          /*
          this._modal = this.findParentBlock( Page ).findChildBlock( { block: Modal, modName: 'action', modVal: 'review' } );
          this._reviews = this.findChildBlocks( { block: Review, modName: 'view', modVal: 'short' } );

          this._reviews.forEach( review => {
          console.log( review );
            this._domEvents( review ).on( 'click', event => {
            console.log( event.bemTarget.params );
            } )
          } )
          */
        }
      }
    }
  } ) );
} );
