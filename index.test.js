var isRicky = require('./index')

describe('Testing isRicky', function () {
  it('should return true passing Geo', function () {
    expect(isRicky('Ricky')).toBeTruthy()
  })

  it('should return false passing Google', function () {
    expect(isRicky('Goolge')).toBeFalsy()
  })
})
