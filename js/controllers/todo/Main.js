N13.define('App.controllers.todo.Main', {
    extend: 'App.controllers.Controller',
    requires: [
        'App.controllers.Controller',
        'App.views.todo.NewTodo',
        'App.views.todo.ListTodos'
    ],
    createViews: function(){
        this._newTodoView = new App.views.todo.NewTodo({selector: '.todos .todos-new'});
        this._listTodosView = new App.views.todo.ListTodos({selector: '.todos .todos-list'});
    },
    addHandlers: function(){
        this._newTodoView.on('addNewTodo', this._onAddNewTodo.bind(this));
    },
    _onAddNewTodo: function (e, text) {
        this._listTodosView.addNewTodo(text);
    }
});