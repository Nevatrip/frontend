modules.define('test', ['i-bem-dom', 'popup', 'link'], function(provide, bemDom, Popup, Link) {

provide(bemDom.declBlock(this.name, {
  onSetMod: {
    js: {
      inited: function() {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!');
        this._popup = this.findChildBlock(Popup);
        this._link = this.findChildBlock(Link);

        console.log( this._popup );
        console.log( this._link );

        // setTimeout

        this._link.setMod('view', 'active');

        this._domEvents().on('click', event => {
          this._popup
            .setAnchor(this._link)
            .setContent('Hello!!!!!!!!!!!!!!!!!!')
            .setMod('visible', true)
        } )

        this._elem('elem').setMod('active', 'yes')

      }
    }
  }
}));

});
