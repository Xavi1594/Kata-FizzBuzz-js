import { fizzbuzz, fizzbuzz2 } from "../src/scripts/FizzBuzz";
describe('FizzBuzz', () => {
    test('should return Fizz is divisible by three', () => {
        
        const numb = 3;
        const result = fizzbuzz(numb);
        expect(result).toBe("Fizz");
    });

    test('should return Buzz is divisible by five', () => {
        
        const numb = 10;
        const result = fizzbuzz(numb);
        expect(result).toBe("Buzz");
    });

    test('should return FizzBuzz is divisible by three and divisible for five', () => {
        
        const numb = 15;
        const result = fizzbuzz(numb);
        expect(result).toBe("FizzBuzz");
    });

    test('should return Fizz is divisible by three or have a three inside', () => {
        
        const numb = 32;
        const result = fizzbuzz2(numb);
        expect(result).toBe("Fizz");
    });

    test('should return Buzz is divisible by five or have a five inside', () => {
        
        const numb = 52;
        const result = fizzbuzz2(numb);
        expect(result).toBe("Buzz");
    });

    test('should return FizzBuzz is divisible by five or have a five inside AND is divisible by three or have a three inside', () => {
        
        const numb = 53;
        const result = fizzbuzz2(numb);
        expect(result).toBe("FizzBuzz");
    });


});