import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
jest.mock("./components/App/components/Welcome", () => () => <div data-testid="Welcome"></div>);
jest.mock("./components/App/components/Total", () => () => <div data-testid="Total"></div>);
jest.mock("./components/App/components/Downloads", () => () => <div data-testid="Downloads"></div>);
jest.mock("./components/App/components/Area", () => () => <div data-testid="Area"></div>);
jest.mock("./components/App/components/Invoices", () => () => <div data-testid="Invoices"></div>);
jest.mock("./components/App/components/Authors", () => () => <div data-testid="Authors"></div>);
jest.mock("./components/App/components/ConversionAnalytics", () => () => <div data-testid="ConversionAnalytics"></div>);

test("renders all components within App", () => {
  // Ensure all components are rendered
  expect(screen.getByTestId("Welcome")).toBeInTheDocument();
  expect(screen.getByTestId("Total")).toBeInTheDocument();
  expect(screen.getByTestId("Downloads")).toBeInTheDocument();
  expect(screen.getByTestId("Area")).toBeInTheDocument();
  expect(screen.getByTestId("Invoices")).toBeInTheDocument();
  expect(screen.getByTestId("Authors")).toBeInTheDocument();
  expect(screen.getByTestId("ConversionAnalytics")).toBeInTheDocument();
});
