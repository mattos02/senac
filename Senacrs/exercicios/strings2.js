let frase = ' Olá Mundo . '
let fraseSemEspacos = ''
for (let i = 0; i < frase.length; i++) {
    if (frase[i] !== ' ') {
        fraseSemEspacos += frase[i]
    }
}
console.log(fraseSemEspacos)
