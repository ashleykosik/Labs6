require('functions.js')


test(() => {
    expect(returnTwo().toEqual(2))
})

test(() => {
    expect(greeting('James').toBe("Hello, James"))
    expect(greeting('Jill').toBe("Hello, Jill"))
})

test(() => {
    expect(add(1, 2).toEqual(3))
    expect(add(5, 9).toEqual(14))
})
