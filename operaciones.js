function Add(a, b){
    return a+b
}

function Minus(a, b){
    return a-b
}

function Product(a, b){
    return a*b
}

function Div(a, b){
    if(b === 0){
        return 'División imposible'
    }
    return a/b
}

module.exports = {
    suma: Add,
    resta: Minus,
    producto: Product,
    division: Div
};