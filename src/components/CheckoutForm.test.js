import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.queryByText(/checkout form/i)

    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)
    const button = screen.getByRole('button')

    userEvent.type(firstName, 'Dharmik')
    userEvent.type(lastName, 'Savaliya')
    userEvent.type(address, '1234 street ave')
    userEvent.type(city, 'Fullerton')
    userEvent.type(state, 'California')
    userEvent.type(zip, '98765')
    userEvent.click(button)

    const Success =screen.getByTestId(/successmessage/i)
    expect(Success).toBeInTheDocument()
});
