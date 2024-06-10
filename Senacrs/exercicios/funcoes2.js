function numerosPares(numeros) {
    let pares = []
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i])
        }
    }
    return pares
}
console.log(numerosPares([1, 2, 3, 4, 5, 6]))