import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe("<App />", () => {

  //The input field should be in the document
  //The input field should have the type tel
  test('render phone input', () => {
    render(<App />);

    const inputEl = screen.getByTestId("phone-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "tel");
  });

  //The input field should have valid phone value
  test('pass valid phone number to test phone number input field', () => {
    render(<App />);

    const inputEl = screen.getByTestId("phone-input");
    userEvent.type(inputEl, "(111) 111-1111");
    
    expect(screen.getByTestId("phone-input")).toHaveValue("(111) 111-1111");
  });
});