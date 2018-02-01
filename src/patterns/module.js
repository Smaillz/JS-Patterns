console.log('JS patterns');
const Module = (function () {

    var customObj = {
        name: 'Yahor',
        age: 45
    }

    return {
        person: customObj
    };

})();

console.log(Module.person);
