describe('FizzBuzz', function() {
  var fizzBuzz;
  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      fizzBuzz = new FizzBuzz();
      expect(isDivisibleByThree(3)).toBe(true);
    });
  });
});
