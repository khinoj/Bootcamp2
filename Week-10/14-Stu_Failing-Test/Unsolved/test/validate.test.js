// TODO: Import the Validate class.
const Validate = require('../validate');



// TODO: Describe a testing suite for checking the functionality of the Validate class.
describe('Validate', () => {

    describe('test', () => {
        it('I dont know', () => {
            const total = '';

            const result = new Validate().isPassword(str);

            expect(result).toEqual(false);

        });
    });
});

// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.