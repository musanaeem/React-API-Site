import isNameValid from "../../utils/NameValidator"


describe('Name Validation', () => {

    test('Returns object with isValid true, when name is valid', () => {
        const result = {
            isValid: true,
            errorMessage: ''
        }
        expect(isNameValid('Musa')).toEqual(result)
    })

    test('Returns object with isValid false and errorMessage of alphabet constraint, when name has spaces', () => {
        const result = {
            isValid: false,
            errorMessage: 'Invalid name entered. Please only use alphabets'
        }
        expect(isNameValid('Naeem Ud Din')).toEqual(result)
    })

    test('Returns object with isValid false and errorMessage of alphabet constraint, when name has any special characters/hyphens/numbers', () => {
        const result = {
            isValid: false,
            errorMessage: 'Invalid name entered. Please only use alphabets'
        }
        expect(isNameValid('Naeem-Ud-Din')).toEqual(result)
    })

    test('Returns object with isValid false and errorMessage of length constraint, when name has any special characters/hyphens/numbers', () => {
        const result = {
            isValid: false,
            errorMessage: 'The length should be 3-15 characters. please try again.'
        }
        expect(isNameValid('No')).toEqual(result)
    })


})


