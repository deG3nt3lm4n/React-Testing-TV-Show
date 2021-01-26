import React from "react";
import { render, screen} from "@testing-library/react";
import App from "./App";
import mockData from ".//utils/mockData";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

jest.mock("./api/fetchShow");

test("Renders with no error", () => {
  mockFetchShow.mockResolvedValueOnce({ data: mockData });
  render(<App />);
});

test("displays state", () => {
  mockFetchShow.mockResolvedValueOnce({ data: null });
  render(<App />);

  const isLoading = screen.queryByText(/Fetching data.../i);
  expect(isLoading).toBeInTheDocument();
});