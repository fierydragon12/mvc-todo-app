N13.define('App.controllers.Controller', {
    mixins: {obs: 'App.mixins.Observer'},
    requires: ['App.mixins.Observer'],

    createViews: N13.emptyFn,
    init: function() {
        this.createViews();
        this.callMixin('obs');
        this.addHandlers();
    }
});