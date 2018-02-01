console.log('Observer');

Subcription = {
    subscibers: [],
    emit: function (data) {
        if (!this.subscibers.length) {
            console.log('Not subscribers!');
            return;
        }

        this.subscibers.forEach(func => {
            func(data);
        });
    },
    subscibe: function (func) {
        this.subscibers.push(func);
    }
}

function FirstWorker() {
    Subcription.subscibe(function (message) {
        console.log('FirstWorker get message: ' + message);
    });
}

function SecondWorker() {
    Subcription.subscibe(function (message) {
        console.log('SecondWorker get message: ' + message);
    });
}

function Boss() {
}

Boss.prototype.sendMessageAllWorkers = function (mess) {
    Subcription.emit('Lets work! ' + mess);
}

var w1 = new FirstWorker();
var w2 = new SecondWorker();
var boss = new Boss();
boss.sendMessageAllWorkers('Retards!');