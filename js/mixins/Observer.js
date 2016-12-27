N13.define('App.mixins.Observer', {
    init: function(){
        this.on = this._on;
        this.off = this._off;
    },
    _on: function(arg1, arg2, arg3){
    // DOM-event params: arg1 = el, arg2 = action, arg3 = callback
       if (arguments.length === 3) {
           $(arg1).on(arg2, arg3);
       } else {
    // User-event params: arg1 = userAction, arg2 = callback
           $(this).on(arg1, arg2);
       }
    },
    _off: function(el, action, callback) {
        $(el).on(action, callback);
    },
    fire: function(userAction, parameter){
        $(this).trigger(userAction, parameter);
    }
});
