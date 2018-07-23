var marcos = {
    nome: 'Marcos',
    idade: 33,
    job: 'UX Designer',
    apresentacao: function (estilo, tempo) {
        if (estilo === 'formal') {
            console.log ('Good ' + tempo + '! Eu sou o ' + this.nome + ', tenho ' + this.idade + ' anos e sou ' + this.job + '.')
        } else {
            console.log('What\' up! Good ' + tempo + ', eu sou o ' + this.nome + ', tenho ' + this.idade + ' anos e sou ' + this.job + '.')
        }
    }
};

var eliton = {
    nome: 'Éliton',
    idade: 30,
    job: 'UI Designer',
};


//O Call utiliza o método de um outro objeto naquele em que você indicar.
//Na prática o que ocorre dentro do método é a substituição do THIS. pelos dados do novo objeto.

marcos.apresentacao.call(eliton, 'casual', 'afternoon');

marcos.apresentacao('formal', 'morning');


//O Bind cria uma nova função baseada em novos parametros que podem ser redefidos. Por exemplo, foram pré-definidos o THIS e o estilo.
var elitonFormal = marcos.apresentacao.bind(eliton, 'formal');
elitonFormal('night');


var years = [1990, 1965,1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge (el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(years);
console.log(fullJapan);