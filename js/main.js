function loopDePares(numero){
    for (let i=0; i<=100; i++)
        if ((i+numero)%2 == 0){
            console.log(`El número ${numero+i} es par.`)
        } else{
            console.log(`${numero+i}`)
        }
}
loopDePares(5);