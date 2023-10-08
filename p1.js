
console.log('Hello');

let sum = 0
function add (a) {
sum += a
console.log(sum)
return this.add
}
add(2)(3)(4);