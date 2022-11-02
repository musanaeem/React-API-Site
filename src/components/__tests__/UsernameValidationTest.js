import isUsernameValid from "../../utils/UsernameValidator"


describe('Username Validation', () => {

    test('Returns true when username is valid', () => {
        const result = {
            isValid: true,
            errorMessage: ''
        }
        expect(isUsernameValid('musanaeem')).toEqual(result)
    })

    test('Returns object with isValid false and errorMessage of length constraint', () => {
        const result = {
            isValid: false,
            errorMessage: 'The length should be 3-15 characters. please try again.'
        }
        expect(isUsernameValid('mu')).toEqual(result)
    })

    test('Returns object with isValid false and errorMessage of alphanumeric or hyphen constraint, when username has any special characters', () => {
        const result = {
            isValid: false,
            errorMessage: 'Invalid username entered. Please only use a combination of alphanumeric, _ and -'
        }
        expect(isUsernameValid('musanaeem@#$%')).toEqual(result)
    })

})


