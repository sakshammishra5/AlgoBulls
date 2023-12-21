import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it, vitest } from "vitest";
import SignIn from "../Pages/SignIn";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Createpost from "../Components/Createpost";
import MOCK_DATA from "../mocks/mock.json";

global.fetch = vitest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should load input in SignIn", () => {
  render(
    <BrowserRouter>
      <SignIn />
      <Createpost />
    </BrowserRouter>
  );
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
});

it("should load signin button in signin component", () => {
  render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { text: /signin/ });
  fireEvent.click(loginButton);
  const createPostButton = screen.getByRole("button", { text: /createpost/ });
  expect(createPostButton).toBeInTheDocument();
});
