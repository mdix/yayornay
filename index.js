(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.yayornay = factory();
    }
}(this, function () {
    return function() {
        return Math.round(Math.random());
    };
}));