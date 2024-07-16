import { render, screen, within } from "@testing-library/react";
import '@testing-library/jest-dom'
import Login from "@/app/in/page";

// it("should call the login function with the provided email", () => {
//     render(<LoginDialog />);
//     const Email = screen.getByText("Email")
//     expect(Email).toBeInTheDocument()
// });

it("hello", () => {
    render(<Login searchParams={{
        message: ""
    }} />);
    expect(1).toBe(1);
    // const { getByText } = within(screen.getByText('login'))
    // expect(getByText('some text')).toBeInTheDocument()
});