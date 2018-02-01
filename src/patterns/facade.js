console.log('Facade');

function Bank(amount) {
    this.amount = amount;
}

Bank.prototype.verify = function (amount) {
    return amount < 999
}

function CreditHistory(name) {
    this.name = name;
}

CreditHistory.prototype.check = function (name) {
    return true
}

function Balance(name) {
    this.name = name
}

Balance.prototype.check = function (name) {
    return true
}

function Credit(name) {
    this.name = name
}

Credit.prototype.applyFor = function (amount) {
    const isApproved = new Bank().verify(amount)
    const bankResult = isApproved ? 'approved' : 'denied'
    const isPositiveBalance = new Balance().check(this.name)
    const balance = isPositiveBalance ? 'positive balance' : 'negative balance'
    const isGoodCreditHistory = new CreditHistory().check(this.name)
    const creditHistory = isGoodCreditHistory ? 'good' : 'poor'

    return isApproved && isPositiveBalance && isGoodCreditHistory ? 'approved' : 'denied';
}

const credit = new Credit('John')
const creditSmall = credit.applyFor(99)
const creditMedium = credit.applyFor(199)
const creditLarge = credit.applyFor(99999)

console.log('creditSmall', creditSmall)
console.log('creditMedium', creditMedium)
console.log('creditLarge', creditLarge)