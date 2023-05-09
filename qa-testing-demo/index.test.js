 
 
// bring in functions to test
 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')


let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

  // basic test
  test('should run basic test', () => {
    expect(2).toBe(2)
})

test('first name check', () => {
  expect(testData.firstName.toBe('Patten'))
})

// describe blocks
// tests formatTitle function
describe('formatTitle test', () => {
  test('formatTitle should return a string', () => {
    let formattedTitle = formatTitle(testData.title)
    expect(typeof formattedTitle).toBe('string')
  })

  test('formatTitle should format the string correctly', () => {
    let formattedTitle = formatTitle(testData.title)
    expect(formattedTitle).toBe('Nulla Ac')
  })
})

//shorten bio
describe('shorten-bio tests', () => {
  test('shortens a string', () => {
    let shortBio = shortenBio(testData.bio)
    expect(shortBio.length).toBeLessThan(testData.bio.length)
  })
  
  test('adds ... at the end')
  let shortBio = shortenBio(testData.bio) 
  expect(shortBio).endsWith('...').toBe(true) // or .toContains
})

//convert-length function
describe('convert length tests', () => {
  test('convertLength returns an array with two items in it', () => {
    let converted = convertLength(testData.length)
    expect(converted.length).toBe(2) // expect(converted).toHaveLength(2)
  })

  test('convertlength can handle numbers below 60', () => {
    let converted = convertLength(40)
    expect(converted[1]).toEqual(40)
    expect(converted[0]).toEqual(0)
  })
})

//.toEqual compares value
//.toBe will not work with different objects as it needs to be an exact match (aka same object)