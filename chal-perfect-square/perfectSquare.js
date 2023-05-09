



function perfectSquare(num) {
    //find square root of input num
    let sqr = Math.sqrt(num) 
    //check if it is a whole number, if so add 1
    if(Number.isInteger(sqr)) {
        sqr += 1
        //square the new new number
        let newNum = sqr * sqr
        console.log(newNum)
    } else {
        console.log(-1)
    }
}


perfectSquare(10)
perfectSquare(9)
//perfectSquare(3)


//short version
//const perfectSquare = (x) => Number.isInteger(Math.sqrt(x)) ? (Math.sqrt(x)+1)**2 : -1