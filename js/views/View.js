N13.define('App.views.View', {
    mixins: {obs: 'App.mixins.Observer'},
    requires: ['App.mixins.Observer'],
    configs: {
        selector: ''
    },
    init: function(){
        this.el = $(this.selector);
        this.callMixin('obs');
        this.addHandlers();
    },
    addHandlers: N13.emptyFn,
    removeHandlers: N13.emptyFn,

    updateHandlers: function(){
        this.removeHandlers();
        this.addHandlers();
    }
});