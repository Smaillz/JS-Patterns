console.log('Singleton');

var Singleton_v1 = (function () {
    var instance;

    function Singleton() {
        if (instance) {
            return instance;
        }
        instance = this;
    };

    return Singleton;

})();

var Singleton_v2;
(function () {
    var instance;
    Singleton_v2 = function () {
        if (instance) {
            return instance;
        }
        instance = this;
    }
}());

var Singleton_v3 = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const q1 = new Singleton_v1();
const q2 = new Singleton_v1();
console.log('Singleton_v1', q1 === q2);

const w1 = new Singleton_v2();
const w2 = new Singleton_v2();
console.log('Singleton_v2', w1 === w2);

const e1 = Singleton_v3.getInstance();
const e2 = Singleton_v3.getInstance();
console.log('Singleton_v3', e1 === e2);