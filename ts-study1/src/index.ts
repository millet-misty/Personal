console.log('Hello.')
const aa = Symbol('a')
console.log(aa === Symbol('b'))

let bb: {b1: number} = {
  b1: 12
}
bb = { b1: 16 }

// eslint-disable-next-line eqeqeq
console.log(bb.b1 == 12)

const cc = [1, 'a']
cc.push('c')
console.log(cc.pop())

type t ={
    name: string
    age: number
    isobake: boolean
}
// eslint-disable-next-line no-unused-vars
const okada: t = {
  name: 'Okada',
  age: 55.8,
  isobake: true
}
console.log(okada.age)
