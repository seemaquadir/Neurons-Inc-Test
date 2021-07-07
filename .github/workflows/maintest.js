const getRandomFruitsName = require('./main')

describe('random-fruits-name', () => {
  describe('Basic usage', () => {
    test('Get fruits name text with default name', () => {
      expect(getRandomFruitsName()).toBeTruthy()
    })

    test('Get fruits name text in English', () => {
      expect(getRandomFruitsName('en')).toBeTruthy()
    })

    
  })

  describe('maxWords option', () => {
    describe('If `maxWords: 1` is specified.', () => {
      test('Select English', () => {
        const fruitsName = getRandomFruitsName('en', { maxWords: 1 })
        expect(fruitsName).toBeTruthy()

        // `fruitsName` should  hasn't space
        expect(fruitsName.split(' ').length).toEqual(1)
      })

      })
    })

   
    describe('If `maxWords` is not a number (value is empty case).', () => {
      test('Select English', () => {
        expect(() => getRandomFruitsName('en', { maxWords: '' })).toThrow()
      })

     
    })

 


  describe('If specify a non-existent option', () => {
    test('Specify `test` option', () => {
      expect(() => getRandomFruitsName('en', { test: 1 })).toThrow()
    })
  })
})
