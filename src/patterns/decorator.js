console.log('Decorator');

function Coffee(param) {
    this._costs = param || 10;
}

Coffee.prototype.cost = function () {
    return this._costs;
}

/**
 * Декоратор для объекта Coffee
 * увеличивает стоимость кофе при добавлении сахара
 * @param {object} coffee объект типа кофе
 * @returns {number} стоимость кофе с сахаром
 */
function sugar(coffee) {
    var coffeeCost = coffee.cost();

    coffee.cost = function () {
        return coffeeCost + 1;
    }

}

/**
 * Миксованный декоратор для объекта Coffee
 * увеличивает стоимость кофе при добавлении сахара и молока
 * @param {object} coffee объект типа кофе
 * @returns {number} стоимость кофе с сахаром и молоком
 */
function sugarWithMilk(coffee) {
    sugar(coffee);
    var coffeeCost = coffee.cost();

    coffee.cost = function () {
        return coffeeCost + 4;
    }
}

var coffee = new Coffee();
sugar(coffee);
console.log(coffee.cost());
var coffee2 = new Coffee();
sugarWithMilk(coffee2);
console.log(coffee2.cost());



