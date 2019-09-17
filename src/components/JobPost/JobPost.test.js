import {render} from "@testing-library/react";
import React from "react";
import JobPost from "./JobPost";

describe('JobPost component test', () => {

  let post = {
    "_id": "5b2bd7ff9d73a1001456c330",
    "title": "MERCHANT NAVY GP RATING COURSE CALL NOW-8800279737",
    "applylink": "https://www.jobguru.in/job/2010802/MERCHANT-NAVY-GP-RATING-COURSE-CALL-NOW-8800279737",
    "jd": "www.merchantnavycentre.com/ APPLY ONLINE FORM JoinMerchant Navy -10th/12th pass* High Salary. JOIN MERCHANT NAVY* SALARY RS:-25,500T0 85,000 Monthly/Best Carrier IN MERCHANT NAVY /- Seaman / Pre Sea /GPRating/Deck cadet/Marine Technician /Minimum Age",
    "companyname": "Company name not disclosed",
    "location": "JHARKHAND",
    "experience": "",
    "salary": "Above Rs.960000 PA",
    "type": "Full Time",
    "skills": "",
    "startdate": "05-17-2018",
    "enddate": "",
    "created": "",
    "source": "jobguru",
    "timestamp": 1529599999.121457,
    "__v": 0
  }

  it('renders the mocked JonPost component', () => {
    const {getByTestId} = render(
      <JobPost {...post}/>);
    const elem = getByTestId('jobPost-test');

    expect(elem.querySelector('.title').textContent).toBe('MERCHANT NAVY GP RATING COURSE CALL NOW-8800279737');
    expect(elem.querySelector('.skills')).toBeNull()
    expect(elem.children.length).toBe(6);
  });

});
