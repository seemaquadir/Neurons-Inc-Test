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

    describe('If `maxWords: 2` is specified.', () => {
      test('Select English', () => {
        const fruitsName = getRandomFruitsName('en', { maxWords: 2 })
        expect(fruitsName).toBeTruthy()

        const wordCount = fruitsName.split(' ').length
        expect(wordCount <= 2).toBeTruthy()
      })

     
      })
  

    describe('If `maxWords` is not a number (strings case).', () => {
      test('Select English', () => {
        expect(() => getRandomFruitsName('en', { maxWords: '1' })).toThrow()
      })
    })

    describe('If `maxWords` is not a number (float case).', () => {
      test('Select English', () => {
        expect(() => getRandomFruitsName('en', { maxWords: 1.23 })).toThrow()
      })
    })

    describe('If `maxWords` is not a number (boolean case).', () => {
      test('Select English', () => {
        expect(() => getRandomFruitsName('en', { maxWords: true })).toThrow()
        expect(() => getRandomFruitsName('en', { maxWords: false })).toThrow()
      })

    })

    describe('If `maxWords` is not a number (value is empty case).', () => {
      test('Select English', () => {
        expect(() => getRandomFruitsName('en', { maxWords: '' })).toThrow()
      })

     
    })

    describe('When `maxWords` is specified without `lang`.', () => {
      test('Only specify `maxWords` as an option.', () => {
        expect(() => getRandomFruitsName({ maxWords: 1 })).toThrow()
      })
    })
  })

  describe('If specify a non-existent option', () => {
    test('Specify `test` option', () => {
      expect(() => getRandomFruitsName('en', { test: 1 })).toThrow()
    })
  })
})
