import * as calculator from './operaciones.mjs'
import soap from 'soap'
import express from 'express'
import fs from 'fs'

var soapService = {
    calculatorService: {
        calculatorServiceSoapPort: {
            Suma: (args) => {
                return {
                    result: args.intA + args.intB
                }
            },
            Resta: (args) => {
                return {
                    result: args.intA - args.intB
                }
            },
            Producto: (args) => {
                return {
                    result: args.intA * args.intB
                }
            },
            Division: (args) => {
                if (args.intB === 0){
                    return {result: 0}
                }
                return {
                    result: args.intA / args.intB
                }
            }
        }
    }
}

var WSDL = fs.readFileSync('input.wsdl', 'utf-8')

var app = express()

app.listen(8000, ()=> {
    soap.listen(app, '/calculator', soapService, WSDL)
})

console.log('Puerto: ', 8000)