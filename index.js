function simple_dimple(counter) {
    let arr = []
    for (let i = 2; arr.length !== counter; i++) {
        let flag = true
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                flag = false
            }
        }
        if (flag === true) {
            arr.push(i)
        }
    }
    return arr
}

console.log(simple_dimple(process.argv[2]))