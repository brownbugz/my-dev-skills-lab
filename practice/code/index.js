let arr = [1,4,7,9,12]

let nums = [...Array(1000).keys()]

const bruteForce = (arr, element) => {
    let t0 = performance.now()
    for (let i=0; i< arr.length; i++) {
        if(arr[i] === element) {
            let t1 = performance.now()
            console.log(i, `${t1-t0} milliseconds`)
            return i;
        }
    }
}

bruteForce(nums, 900)
bruteForce(nums, 100)
bruteForce(nums, 9)

//Time 0(n)


//Search 0(Log2n)
//Key points of Binary Search
//Array must be sorted
//Start, End, Midpoint
//You keep splitting until your midpoint matches the value you are looking for

const binarySearch = (searchArray, searchElement) => {
    //middle, Start, End
    
}