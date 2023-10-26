let chai = require('chai');
let expect = chai.expect;
let Menu = require('./Menu');
describe('Math Functions', function() {
    
    
    describe('Menu function', function() {
        it('success', function() {
            let result = Menu.addToOrder('Bucket');
            expect(result).to.equal(120);
        });

 
    });

   
    describe('multiply', function() {
        it('return 6, input (2)(3)', function() {
            let result = +MathOps.multiply(2)(3);
            expect(result).to.equal(6);
        });
    
        it('return 24, , input (2)(3)(4)', function() {
            let result = +MathOps.multiply(2)(3)(4); 
            expect(result).to.equal(24);
        });
    });
    

});