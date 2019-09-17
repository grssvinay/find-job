import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('App component test', () => {
  it('renders the mocked App component', () => {
    const { getByTestId } = render(<App />);
    const elem = getByTestId('app-test');

    expect(elem.firstChild.innerHTML).toBe('Find&nbsp;Job');
    expect(elem.children.length).toBe(3);

  });
})
