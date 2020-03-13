modules.define('form', ['jquery', 'button'], (provide, $, Button, Form) => {
  provide(Form.declMod({ modName: 'view', modVal: 'add-to-cart' }, {
    onSetMod: {
      js: {
        inited() {
          this.__base.apply(this, arguments);
          this._api = this.params.api;

          this._events().on('success', event => {
            console.log('event', event);

            // event.target.domElem[0].submit();
          });

          this._redirect = this.domElem[0].action;
          this._submit = this.findChildBlock({ block: Button, modName: 'type', modVal: 'submit' });
          this._added = false;
        }
      }
    },
    _onSubmit(e) {
      e.preventDefault();

      if (this._added) {
        window.location.href = this._redirect;
      } else {
        const val = this.getVal();

        $.ajax({
          type: 'PUT',
          url: `//${this._api}/shoppingCarts/${val.session}`,
          data: JSON.stringify({
            sessionId: val.session,
            created: new Date(),
            updated: new Date(),
            products: [{ productId: val.product }],
            user: {},
          }),
          contentType: 'application/json; charset=utf-8'
        }).done(data => {
          this._added = true;
          // this._submit.setText( 'Добавлено 👌' );
          window.location.href = this._redirect;
        }).fail(err => {
          console.log('err', err);
        });
      }
    }
  }));
});
