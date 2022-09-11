import * as React from "react";
import { createRoot } from "react-dom/client";
import Login from ".";
import { act } from "react-dom/test-utils";

beforeEach(() => {
  document.body.innerHTML = "";
});

global.IS_REACT_ACT_ENVIRONMENT = true;
test("submitting the form calls onSubmit with username and password (without react testing lib)", async () => {
  const div = document.createElement("div");
  document.body.append(div);

  const root = createRoot(div);
  const handleSubmit = jest.fn();
  act(() => root.render(<Login onSubmit={handleSubmit} />));

  const username = "Gani";
  const password = "i need no password";

  const usernameInput = div.querySelector('[data-testid="username"]');
  const passwordInput = div.querySelector('[data-testid="password"]');
  const submit = div.querySelector('[data-testid="submit"]');

  usernameInput.value = username;
  passwordInput.value = password;

  submit.click();

  //   const submitEvent = new MouseEvent("click", {
  //     bubbles: true,
  //     cancelable: true,
  //     button: 0,
  //   });

  //   act(() => submit.dispatchEvent(submitEvent));

  expect(handleSubmit).toHaveBeenCalledWith({
    username,
    password,
  });
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
