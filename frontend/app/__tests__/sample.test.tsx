import { render, screen } from "@testing-library/react";

describe("Sample Test", () => {

  test("should render Hello World", () => {

    render(<h1>Hello World</h1>);

    const heading = screen.getByText("Hello World");

    expect(heading).toBeInTheDocument();

  });

  // Intentionally failing test
  test("should render Welcome to Next.js", () => {
    render(<h1>Hello World</h1>);

    const heading = screen.getByText("Hello World");

    expect(heading).toHaveTextContent("Welcome to Next.js");
  });

});