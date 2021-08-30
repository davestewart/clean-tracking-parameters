const { cleanUtm } = require('../index.js')

const path = 'https://example.com/product/'

test('url with tracking', () => {
  expect(cleanUtm(path + '?utm_source=twitter&utm_medium=social&utm_campaign=articles_promotion&utm_content=summer')).toBe(path)
})

test('url with tracking and more', () => {
  expect(cleanUtm(path + '?utm_source=twitter&test=1')).toBe(path + '?test=1')
})

test('url without tracking', () => {
  expect(cleanUtm(path + '?test=1')).toBe(path + '?test=1')
})
