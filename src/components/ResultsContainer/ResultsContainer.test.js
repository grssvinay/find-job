import {render} from "@testing-library/react";
import React from "react";
import ResultsContainer from "./ResultsContainer";

describe('ResultsContainer component test', () => {

  let data = {
    searchResults: [{
      _id: 1234,
    }, {
      _id: 2345,
    }],
    totalCount: 2,
    totalProfiles: [{
      _id: 1234,
    }, {
      _id: 2345,
    }],
    isLoading: false
  };

  it('renders the mocked ResultsContainer component', () => {
    const {getByTestId} = render(
      <ResultsContainer {...data}/>);
    const elem = getByTestId('results-test');

    expect(elem.querySelector('.resultsCount').textContent).toBe('Showing 2 of 2');
    expect(elem.firstChild.children.length).toBe(2);
  });

  it('renders the mocked ResultsContainer component with No Results Found text', () => {
    data.searchResults = [];
    const {getByTestId} = render(
      <ResultsContainer {...data}/>);
    const elem = getByTestId('results-test');

    expect(elem.firstChild.innerHTML).toBe('NO RESULTS FOUND');
    expect(elem.children.length).toBe(1);
  });

  it('renders the mocked ResultsContainer component with loading message', () => {
    data.searchResults = [];
    data.isLoading = true;
    const {getByTestId} = render(
      <ResultsContainer {...data}/>);
    const elem = getByTestId('results-test');

    expect(elem.firstChild.innerHTML).toBe('PLEASE WAIT WHILE LOADING...');
    expect(elem.children.length).toBe(1);
  });
});
