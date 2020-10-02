describe('Calculator', () => {
  describe('#add', () => {
    describe('when passed a string as a number', () => {
      it('should throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.add('1', 2)).toThrow();
        expect(() => calculator.add(1, '2')).toThrow();
      });
    });

    describe('when passed two numbers', () => {
      it('should not throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.add(1, 2)).not.toThrow();
      });

      it('should add the numbers together', () => {
        const calculator = new Calculator();

        const result = calculator.add(1, 2);

        expect(result).toBe(3);
      });
    });
  });
  describe('#subtract',()=>{
describe('when passed string as parameter',()=>{
  it('should throw an error',()=>{
    const calculator = new Calculator();

        expect(() => calculator.subtract('1', 2)).toThrow();
        expect(() => calculator.subtract(1, '2')).toThrow();
  });
});
describe('when passed two numbers', () => {
  it('should not throw an error', () => {
    const calculator = new Calculator();

    expect(() => calculator.subtract(4, 2)).not.toThrow();
  });

  it('should subtract the numbers together', () => {
    const calculator = new Calculator();

    const result = calculator.subtract(4,2);

    expect(result).toBe(2);
  });
});
  });

  describe('#multiply',()=>{
    describe('when passed string as parameter',()=>{
      it('should throw an error',()=>{
        const calculator = new Calculator();
    
            expect(() => calculator.multiply('1', 2)).toThrow();
            expect(() => calculator.multiply(1, '2')).toThrow();
      });
    });
    describe('when passed two numbers', () => {
      it('should not throw an error', () => {
        const calculator = new Calculator();
    
        expect(() => calculator.multiply(4, 2)).not.toThrow();
      });
    
      it('should subtract the numbers together', () => {
        const calculator = new Calculator();
    
        const result = calculator.multiply(4,2);
    
        expect(result).toBe(8);
      });
    });
      });
      describe('#divide',()=>{
        describe('when passed string as parameter',()=>{
          it('should throw an error',()=>{
            const calculator = new Calculator();
        
                expect(() => calculator.divide('1', 2)).toThrow();
                expect(() => calculator.divide(1, '2')).toThrow();
          });
        });
        describe('when passed two numbers', () => {
          it('should not throw an error', () => {
            const calculator = new Calculator();
        
            expect(() => calculator.divide(4, 2)).not.toThrow();
          });
        
          it('should subtract the numbers together', () => {
            const calculator = new Calculator();
        
            const result = calculator.divide(4,2);
        
            expect(result).toBe(2);
          });
        });
          });     

});