import {render} from "@testing-library/react";
import React from "react";
import SearchContainer from "./SearchContainer";

describe('SearchContainer component test', () => {

  let data = {
    updateState: function() {},
    experienceOptions: [],
    skillsOptions: [],
    locationOptions: []
  }

  it('renders the mocked SearchContainer component', () => {
    const { getByTestId } = render(
      <SearchContainer {...data}/>);
    const elem = getByTestId('search-test');

    expect(elem.querySelector('.search button').textContent).toBe('Search');
    expect(elem.children.length).toBe(2);
  });

  it('renders the mocked SearchContainer component with filter options', () => {
    data.searchResults = [];
    const { getByTestId } = render(
      <SearchContainer {...data}/>);
    const elem = getByTestId('search-test');

    expect(elem.querySelectorAll('.optionFields > div').length).toBe(3);
    expect(elem.querySelectorAll('.optionFields h4').length).toBe(3);
  });
})
