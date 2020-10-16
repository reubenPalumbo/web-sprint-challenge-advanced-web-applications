import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  render(<BubblePage />);

  const bubbles = screen.getAllByText(/bubbles/i);

  expect(bubbles);
});
