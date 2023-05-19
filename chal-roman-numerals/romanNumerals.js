
/*
1 = I
5 = V
10 = X
50 = L
100 = C
500 = D
*/

function roman(num) {
    let str = num.toString()
    if(num === 1000) {
        console.log('M')
    } else if (str.length === 3) {
        if(parseInt(str[0]) === 5) {
            console.log('D')
        } else if(parseInt(str[0]) > 5) {
                str = parseInt(str[0]) - 4
                let d = 'D'
                console.log(d.repeat(str))
            }
        if(parseInt(str[0]) === 1) {
            console.log('C')    
        } else if (parseInt(str[0]) > 1) {
            str = parseInt(str[0])
            let c = 'C'
            console.log(c.repeat(str))
        }
    }
}


//roman(1000)
//roman(500)
//roman(600)
//roman(400)
//roman(300)
//roman(100)