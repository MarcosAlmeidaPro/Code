/* var marcos = {
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

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20)); */

/* console.log(years);
console.log(fullJapan); */


function question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

var q1 = new question('Você é um UX Designer?', ['Sim', 'Não'], 0);

var q2 = new question('Você conhece o método Design Sprint?', ['Design Thinking?', 'Sim', 'Não'], 1);

var q3 = new question('Qual é o valor da equação 2x * 152 = 3y - 10x', ['Sei lá', 'Fudeu', '1501235', 'Não faço a mínima ideia'], 2)

var questions = [q1, q2, q3];

function showQuestion(arr) {
    
    //Seleciona uma questão aleatória na array Questions
    var selectedQuestion = arr[Math.round(Math.random()*2)];
    
    //Apresenta no console as opções de respostas para a questão selecionada
    for (var index = 0; index < selectedQuestion.answers.length; index++) {
        console.log((index + 1) + ': ' + selectedQuestion.answers[index])
    };

    //Apresenta a pergunta selecionada
    var resultado = prompt(selectedQuestion.question);
  
    //Checa se a resposta digita está de acordo com o gabarito
    if (resultado - 1 === selectedQuestion.correct) {
        console.log('Acertou');
        showQuestion(arr);
    } else {
        console.log('errou');
    }


}

showQuestion(questions);



