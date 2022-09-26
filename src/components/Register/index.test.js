import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from ".";

const mockedUseNavigate = jest.fn();
const mockedLogin = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockedUseNavigate,
  };
});

jest.mock("../../hooks/useAuth", () => {
  return () => ({
    login: mockedLogin,
  });
});

test("submitting the form calls onSubmit with username and password", async () => {
  mockedLogin.mockImplementation(() => Promise.resolve());
  render(<Login />);
  const username = "chucknorris";
  const password = "i need no password";

  await userEvent.type(screen.getByLabelText(/username/i), username);
  await userEvent.type(screen.getByLabelText(/password/i), password);
  await userEvent.click(screen.getByRole("button", { name: /submit/i }));

  expect(mockedLogin).toHaveBeenCalledWith({
    username,
    password,
  });
  expect(mockedLogin).toHaveBeenCalledTimes(1);
  expect(mockedUseNavigate).toHaveBeenCalledTimes(1);
  expect(mockedUseNavigate).toHaveBeenCalledWith("/dashboard");
});
