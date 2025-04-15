const prompt = require('prompt-sync')();

function FormatarData (dia,mês,ano) {
    let data = `${dia}/${mês}/${ano}`
    return data
}
let data = FormatarData(25, 12, 1987)


