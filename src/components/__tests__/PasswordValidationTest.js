import IsPasswordValid from "../../utils/PasswordValidator"


describe('Password Validation', () => {

    test('Returns true when password is valid', () => {
        const result = {
            isValid: true,
            errorMessage: ''
        }
        expect(IsPasswordValid('pass123@','pass123@')).toEqual(result)
    })

    test('Returns object with isValid false and errorMessage of length constraint', () => {
        const result = {
            isValid: false,
            errorMessage: 'Password length should be between 6 and 15 characters.'
        }
        expect(IsPasswordValid('pass','pass')).toEqual(result)
    })

    test('Returns object with isValid false and errorMessage of number and symbols being mandatory constraint', () => {
        const result = {
            isValid: false,
            errorMessage: 'Invalid password. Password should contain numbers and symbols.'
        }
        expect(IsPasswordValid('password','password')).toEqual(result)
    })

    test('Returns object with isValid false and errorMessage of number and symbols being mandatory constraint', () => {
        const result = {
            isValid: false,
            errorMessage: 'Invalid password. Password should only contain alphabets, numbers and symbols.'
        }
        expect(IsPasswordValid('number12~@','number12~@')).toEqual(result)
    })

})


