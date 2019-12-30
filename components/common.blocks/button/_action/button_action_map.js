modules.define( 'button', ['page', 'modal', 'i-bem-dom', 'BEMHTML'], ( provide, Page, Modal, bemDom, BEMHTML,  Button ) => {
  provide( Button.declMod( { modName: 'action', modVal: 'map' }, {
    onSetMod: {
      js: {
        inited() {
          this._modal = this.findParentBlock( Page )
            ._elem( 'modal' )
            .findMixedBlock( Modal );

          this._modal.setContent( this.params.hello )
        }
      }
    }
  } ) );
} );
