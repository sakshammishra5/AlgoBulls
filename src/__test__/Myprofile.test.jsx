import { expect, test } from "vitest";
import Myprofile from "../Pages/Myprofile";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


describe("Myprofile Test cases", () => {
  
  test("should load my profile component", () => {
    render(<Myprofile />);
    const heading = screen.getByRole("heading", { name: /Name:/i });
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside Myprofile component", () => {
    render(<Myprofile />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should load input name inside Myprofile component", () => {
    render(<Myprofile />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });
});
