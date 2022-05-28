function Add(a, b){
    return {
        result: a+b
    }
}

function Minus(a, b){
    return {
        result: a-b
    }
}

function Product(a, b){
    return {
        result: a*b
    }
}

function Div(a, b){
    if(b === 0){
        return {
            result: 0
        }
    }
    return {
        result: a/b
    }
}

export default { Add, Minus, Product, Div }