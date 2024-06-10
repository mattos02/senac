
// 2- Desafio: Crie uma função que receba um array de números e retorne um novo array com apenas os números pares.
function filtrarPares(numeros) {
    let pares = []
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i])
        }
    }
    return pares
}
console.log(filtrarPares([1, 2, 3, 4, 5, 6]))