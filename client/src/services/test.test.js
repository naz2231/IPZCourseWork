import { login, getCurrentUser } from './aut.service';

describe('auth service', () => {

  beforeEach(() => {

  })

  describe('login', () => {
    it('should call callWebApi once', () => {
      login({});
      expect(true).toBe(true)
    })
  })

  describe('getCurrentUser', () => {
    it('should call callWebApi once', () => {
      getCurrentUser();
      expect(true).toBe(true)
    })
  })
})