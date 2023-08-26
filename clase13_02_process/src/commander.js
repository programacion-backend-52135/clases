import { Command } from 'commander'

// Instanciamos el commander
const program = new Command()

// Configuramols las vbariables que vamos a recibir
program
    .option('-d', 'Varaibles para debug', false)
    .option('-p <port>', 'Puerto del servidor', 8080)
    .option('--mode <mode>', 'Modo de trabajo', 'production')
    .requiredOption('--password <password>', 'Password de DB')
    .requiredOption('-u <user>', 'User que corre el app')
    .option('-l, --letters [letters...]', 'Especificar letras')

program.parse() // Consigue los argv y los guarda en command

console.log('Options ', program.opts()) // El resultado
console.log('Arguments: ', program.args)
