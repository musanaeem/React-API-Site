import React from 'react'
import RegisterForm from "../RegisterForm"
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Name Validation', () => {

    test('validate First Name field being present', () => {
        render(<RegisterForm/>)

        const firstNameInput = screen.getByPlaceholderText('First Name...')
        expect(firstNameInput).toBeInTheDocument();
        expect(firstNameInput).toHaveAttribute('type', 'text')
        fireEvent.change(firstNameInput, {'target': {'value': 'TestName'}})
        expect(firstNameInput).toHaveAttribute('value','TestName')
    })

    test('validate Last Name field being present', () => {
        render(<RegisterForm/>)

        const lastNameInput = screen.getByPlaceholderText('Last Name...')
        expect(lastNameInput).toBeInTheDocument();
        expect(lastNameInput).toHaveAttribute('type', 'text')
        fireEvent.change(lastNameInput, {'target': {'value': 'TestName'}})
        expect(lastNameInput).toHaveAttribute('value','TestName')
    })
})

test('Validate submit button is disabled on form render', () => {
    render(<RegisterForm/>)

    const submit = screen.getByRole('button')
    expect(submit).toHaveAttribute('disabled')
})