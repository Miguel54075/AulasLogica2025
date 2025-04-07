const prompt = require('prompt-sync')();
porca = 3
pig = porca + 2
while (pig) {
    console.log(prompt('qual a gordura da pepa porca? '));
    break
}
if (porca == pig) {
    console.log('porca e pig');
}