N13.define('App.views.todo.NewTodo', {
    extend: 'App.views.View',
    requires: ['App.views.View'],

    _ADD_BUTTON_TODO_SELECTOR: 'button#add-todo',
    _ADD_INPUT_TODO_SELECTOR: 'input',
    _SHOW_HAS_ERROR_SELECTOR: '.form-group',
    _HAS_ERROR_CLASS: {
        ADD: 'add',
        REMOVE: 'remove',
        CLASS: 'has-error'
    },

    addHandlers: function(){
        this.on(this.el.find(this._ADD_INPUT_TODO_SELECTOR), "focus keydown", this._onFocusInput.bind(this));
        this.on(this.el.find(this._ADD_INPUT_TODO_SELECTOR), 'keyup', this._onClickAndKeyupAddTodo.bind(this));
        this.on(this.el.find(this._ADD_BUTTON_TODO_SELECTOR), 'click', this._onClickAndKeyupAddTodo.bind(this));
    },
    _onFocusInput: function() {
        this._manageHasErrorClass(this._HAS_ERROR_CLASS.REMOVE);
    },
    _onClickAndKeyupAddTodo: function (e) {
        if ($(e.target).prop("tagName").toLowerCase() === this._ADD_INPUT_TODO_SELECTOR && e.keyCode !== 13) {
            return;
        }

        var newTodo = this.el.find(this._ADD_INPUT_TODO_SELECTOR).val();
        if (!N13.isString(newTodo) || newTodo.length === 0) {
            this._manageHasErrorClass(this._HAS_ERROR_CLASS.ADD);
            return;
        } else {
            this.fire('addNewTodo', newTodo);
        }
    },
    _manageHasErrorClass: function(state) {
        if (state === this._HAS_ERROR_CLASS.ADD) {
            this.el.find(this._SHOW_HAS_ERROR_SELECTOR).addClass(this._HAS_ERROR_CLASS.CLASS);
        } else {
            this.el.find(this._SHOW_HAS_ERROR_SELECTOR).removeClass(this._HAS_ERROR_CLASS.CLASS);
        }
    }

});