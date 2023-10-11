function reverse(num) {
    const string = String(num)
    const reverse = string.split('').reverse().join('')
    return Number(reverse)
}
console.log(reverse(16))