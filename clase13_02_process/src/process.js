
console.log( process.cwd() )
console.log( process.pid )

const argv = process.argv.slice(2)
console.log(argv)

const [PORT, URL_MONGO] = argv

console.log( { PORT, URL_MONGO })



