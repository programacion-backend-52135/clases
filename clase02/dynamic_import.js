const modo = 'calculos'

async function exampleImport() {

    if(modo == 'calculos') {
        // Importa libreria solo si la condicion is true
        const { default: Calculadora} = await import ('./lib.js')
        let calc = new Calculadora()
        console.log(calc.sumar(12, 18))
    }
}

exampleImport()