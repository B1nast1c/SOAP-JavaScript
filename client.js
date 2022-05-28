import { createClient } from 'soap';
var url = 'http://localhost:8000/calculator?wsdl'; //Donde se encuentra en WSDL
var args = {intA: 1,  intB: 2} //Parámetros del cliente

console.log("NUMERO 1:", args.intA, "NUMERO 2:", args.intB)

createClient(url, (err, client) =>{ //Creación
    if (err) { console.log(err) }
    else{ //Llamada a las operaciones del WSDL
        client.Suma(args, (err, res) => {
            if (err) {
                console.log(err)
            }
            else{
                console.log("SUMA: ",res)
            }
        })
        client.Resta(args, (err, res) => {
            if (err) {
                console.log(err)
            }
            else{
                console.log("RESTA:", res)
            }
        })
        client.Producto(args, (err, res) => {
            if (err) {
                console.log(err)
            }
            else{
                console.log("PRODUCTO:", res)
            }
        })
        client.Division(args, (err, res) => {
            if (err) {
                console.log(err)
            }
            else{
                console.log("DIVISION: ", res)
            }
        })
    }
});