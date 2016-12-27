N13.define('App.views.todo.ListTodos', {
    extend: 'App.views.View',
    requires: ['App.views.View'],

    _REMOVE_TODO_SELECTOR: '.remove-todo',
    _REMOVE_LAST_TODO_SELECTOR: 'li:last-child .remove-todo',
    _CURRENT_TODO_CLASS: 'todo',

    addHandlers: function(){
        this.on(this.el.find(this._REMOVE_TODO_SELECTOR), 'click', this._onClickRemoveTodo.bind(this));
    },
    addNewTodo: function(todo){
        if (!N13.isString(todo) || todo === '') {
            return
        }

        this.el.append($.parseHTML(this._createTodoTpl(todo)));
        this.updateHandlers();
    },

    updateHandlers: function(newTodo){
        this.on(this.el.find(this._REMOVE_LAST_TODO_SELECTOR), 'click', this._onClickRemoveTodo.bind(this));
    },
    _onClickRemoveTodo: function(e) {
        var removeTodo = (e.target.parentNode.className === this._CURRENT_TODO_CLASS) ? e.target.parentNode : e.target.parentNode.parentNode;
        this.off($(removeTodo).find(this._REMOVE_TODO_SELECTOR), 'click', this._onClickRemoveTodo.bind(this));
        removeTodo.remove();
    },
    _onAddNewTodo: function (e, text) {
        this._listTodosView.addNewTodo(text);
    },
    _createTodoTpl: function(desc) {
        return [
            '<li class="todo">',
            '<span class="todo-desc">' + desc + '</span>',
            '<button class="remove-todo btn btn-default btn-xs pull-right">',
            '<span class="glyphicon glyphicon-remove"></span>',
            '</button>',
            '</li>'
        ].join('');
    }
});