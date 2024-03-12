import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
jest.mock('./components/App/components/Welcome', () => () => <div data-testid="Welcome"></div>);
jest.mock('./components/App/components/Total', () => () => <div data-testid="Total"></div>);
jest.mock('./components/App/components/Downloads', () => () => <div data-testid="Downloads"></div>);
jest.mock('./components/App/components/Area', () => () => <div data-testid="Area"></div>);
jest.mock('./components/App/components/Invoices', () => () => <div data-testid="Invoices"></div>);
jest.mock('./components/App/components/Authors', () => () => <div data-testid="Authors"></div>);
jest.mock('./components/App/components/ConversionAnalytics', () => () => <div data-testid="ConversionAnalytics"></div>);

test('renders all components within App', () => {
  const { getByTestId } = render(<App />);

  // Ensure all components are rendered
  expect(getByTestId('Welcome')).toBeInTheDocument();
  expect(getByTestId('Total')).toBeInTheDocument();
  expect(getByTestId('Downloads')).toBeInTheDocument();
  expect(getByTestId('Area')).toBeInTheDocument();
  expect(getByTestId('Invoices')).toBeInTheDocument();
  expect(getByTestId('Authors')).toBeInTheDocument();
  expect(getByTestId('ConversionAnalytics')).toBeInTheDocument();
});
