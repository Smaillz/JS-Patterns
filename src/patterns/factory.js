console.log('Factory');

function Factory() {
};

Factory.register = function (Constructor) {
    if (typeof Constructor !== 'function') {
        throw {
            name: 'Error',
            message: 'Constructor is not function'
        }
    }
    this[Constructor.name] = Constructor;
};

Factory.create = function (type) {
    var Constructor = this[type];
    if (typeof Constructor !== 'function') {
        throw {
            name: 'Error',
            message: 'constructor "' + type + '" undefined'
        }
    }
    return new Constructor();
};

var Cat = function () {
    this.type = 'cat';
}
var cat = Factory.register(Cat);
console.log(Factory.create('Cat'));