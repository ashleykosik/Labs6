
let i = [23, 2, 3, 4, 5]

function sortProduct (arr) {
    let mapArr = arr.map((value, index) => {
        return value * (index +1)
    })
    console.log(mapArr)
    mapArr = mapArr.sort((a,b) => a - b)
    console.log(mapArr)

    // how can you change it back to the original values?
    }
    
    let sortByProduct = (arr) => {
        //map the values to an array of objects containing value, index, and product
        const mapArr = arr.map((value, index) => {
            return {value, index, product: value * (index +1)}
        })
        //sort the mapped array by produc in acending order
        mapArr.sort((a,b) => a.product - b.product)
        //map the sorted array back to an array of values only 
        const sortedArr = mapArr.map(obj => obj.value)
        return sortedArr
    }

    sortProduct(i)