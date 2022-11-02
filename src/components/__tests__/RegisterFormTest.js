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

describe('Username Validation', () => {

    test('validate Username field being present', () => {
        render(<RegisterForm/>)

        const usernameInput = screen.getByPlaceholderText('Username...')
        expect(usernameInput).toBeInTheDocument();
        expect(usernameInput).toHaveAttribute('type', 'text')
        fireEvent.change(usernameInput, {'target': {'value': 'TestUserame45'}})
        expect(usernameInput).toHaveAttribute('value','TestUserame45')
    })
})

describe('Email Validation', () => {

    test('validate Email field being present', () => {
        render(<RegisterForm/>)

        const emailInput = screen.getByPlaceholderText('Email...')
        expect(emailInput).toBeInTheDocument();
        expect(emailInput).toHaveAttribute('type', 'text')
        fireEvent.change(emailInput, {'target': {'value': 'Testemail@random.com'}})
        expect(emailInput).toHaveAttribute('value','Testemail@random.com')
    })
})

describe('Passwords Validation', () => {

    test('validate Password field being present', () => {
        render(<RegisterForm/>)

        const passwordInput = screen.getByPlaceholderText('Password...')
        expect(passwordInput).toBeInTheDocument();
        expect(passwordInput).toHaveAttribute('type', 'password')
        fireEvent.change(passwordInput, {'target': {'value': 'pass123@'}})
        expect(passwordInput).toHaveAttribute('value','pass123@')
    })

    test('validate Password Confirmation field being present', () => {
        render(<RegisterForm/>)

        const passwordConfirmationInput = screen.getByPlaceholderText('Password Confirmation...')
        expect(passwordConfirmationInput).toBeInTheDocument();
        expect(passwordConfirmationInput).toHaveAttribute('type', 'password')
        fireEvent.change(passwordConfirmationInput, {'target': {'value': 'pass123@'}})
        expect(passwordConfirmationInput).toHaveAttribute('value','pass123@')
    })
})

test('Validate submit button is disabled on form render', () => {
    render(<RegisterForm/>)

    const submit = screen.getByRole('button')
    expect(submit).toHaveAttribute('disabled')
})