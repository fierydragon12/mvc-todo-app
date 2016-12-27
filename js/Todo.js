N13.define('App.Todo', {
    requires: ['App.controllers.todo.Main'],
    init: function () {
        this._mainCtrl = new App.controllers.todo.Main();
    }
});