import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from ".";

const mockedSetState = jest.fn();

jest.mock("../../hooks/useAuth", () => {
  return () => ({
    login: mockedSetState,
  });
});

test("submitting the form calls onSubmit with username and password", async () => {
  render(<Login />);
  const username = "chucknorris";
  const password = "i need no password";

  await userEvent.type(screen.getByLabelText(/username/i), username);
  await userEvent.type(screen.getByLabelText(/password/i), password);
  await userEvent.click(screen.getByRole("button", { name: /submit/i }));

  expect(mockedSetState).toHaveBeenCalledWith({
    username,
    password,
  });
  expect(mockedSetState).toHaveBeenCalledTimes(1);
});
