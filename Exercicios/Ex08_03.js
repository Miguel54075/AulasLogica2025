const prompt = require('prompt-sync')();

function FormatarData (d,m,a) {
    let dataFormatada = `${d}/${m}/${a}`
    return dataFormatada
}

let data = FormatarData(25, 12, 1987)
console.log(data);
console.log(FormatarData(14, 4, 2025));


