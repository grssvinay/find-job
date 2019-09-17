import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


afterEach(cleanup);

describe('App component test', () => {
  it('renders the mocked App component', () => {
    const { queryByText, getByLabelText, getByText, getByTestId, container } = render(<App />);
    const elem = getByTestId('app-test');

    expect(elem.firstChild.innerHTML).toBe('FindJob');
    expect(elem.children.length).toBe(3);

  });
})
