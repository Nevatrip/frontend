modules.define('navigation', ['i-bem-dom'], function(provide, bemDom) {
  provide(bemDom.declBlock(this.name, {
    onSetMod: {
      js: {
        inited: function() {
          this._elems('toggle').forEach( btn => {
            btn._domEvents().on('click', event => {
              this._elem('content').toggleMod('visible')
            } );
          } )
        }
      }
    }
  }));
});
