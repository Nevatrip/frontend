modules.define('test__elem', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declElem('test', 'elem', {
    onSetMod: {
        js: {
            inited: function() {
                console.log(`I'm element 'elem'`);
            }
        },
        active: {
          yes: function() {
            console.log(`I'm active!`);
          }
        }
    }
}));

});
