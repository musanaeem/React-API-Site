import IsEmailValid from "../../utils/EmailValidator"


describe('Email Validation', () => {

    test('Returns true when email is valid', () => {
        const result = {
            isValid: true,
            errorMessage: ''
        }
        expect(IsEmailValid('musa.naeem@arbisoft.com')).toEqual(result)
    })

    test('Returns object with isValid false and errorMessage of format constraint, when @example.com not added', () => {
        const result = {
            isValid: false,
            errorMessage: 'Invalid Email. The email format entered is not valid.'
        }
        expect(IsEmailValid('musa')).toEqual(result)
    })

    test('Returns object with isValid false and errorMessage of format constraint, when .com/.net/.pk etc, not added', () => {
        const result = {
            isValid: false,
            errorMessage: 'Invalid Email. The email format entered is not valid.'
        }
        expect(IsEmailValid('musa.naeem@arbisoft')).toEqual(result)
    })

    test('Returns object with isValid false and errorMessage of format constraint, when @ not added', () => {
        const result = {
            isValid: false,
            errorMessage: 'Invalid Email. The email format entered is not valid.'
        }
        expect(IsEmailValid('musa.naeem.arbisoft')).toEqual(result)
    })
})




