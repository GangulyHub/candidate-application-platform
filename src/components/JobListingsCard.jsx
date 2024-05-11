import React from "react";
import { connect } from "react-redux";

import {
  updateRoles,
  updateExperience,
  updateLocation,
  updateMinSalary,
  updateCompanyName,
  updateNumberOfEmployees,
} from "../reduxStore/FilterActions.js";
import SelectBox from "./SelectBox.jsx";
import SearchBox from "./SearchBox.jsx";
import { ReactComponent as HourglassIcon } from ".././icons/hourglass.svg";
import { ReactComponent as GreenTickIcon } from ".././icons/greenTick.svg";
import { ReactComponent as ThunderIcon } from ".././icons/thunder.svg";
import { ReactComponent as PeopleIcon } from ".././icons/people.svg";
import "./JobListingsCard.css";

const HandleNullNumber = (data) => {
  return (data !== null && data !== undefined ? data : 0).toString();
};
const redirectToJdUrl=(jdUrl)=> {
  window.location.href = jdUrl;
}
const JobListingsCard = ({
  jobs = [],
  selectedFilters,
  updateRoles,
  updateExperience,
  updateLocation,
  updateMinSalary,
  updateCompanyName,
  updateNumberOfEmployees,
}) => {
  if (!Array.isArray(jobs)) {
    return <div className="not-found">Oops.. No jobs available</div>;
  }

  const rolesOptions = Array.from(new Set(jobs.map((job) => job.jobRole)));
  const minExperienceOptions = Array.from(
    new Set(jobs.map((job) => job.minExp))
  )
    .filter((item) => item !== null)
    .sort((a, b) => a - b);
  const minSalaryOptions = Array.from(
    new Set(jobs.map((job) => job.minJdSalary))
  )
    .filter((item) => item !== null)
    .sort((a, b) => a - b);
  const locationOptions = Array.from(new Set(jobs.map((job) => job.location)));
  const employeesOptions = Array.from(
    new Set(jobs.map((_, idx) => ((idx + 1) * 100)))
  ); //created random options as it was not available in dataset
  const removeEmptyStringKeys = (obj) => {
    const newObj = {};
    Object.keys(obj).forEach((key) => {
      if (obj[key] !== "") {
        newObj[key] = obj[key];
      }
    });
    return newObj;
  };
  const filteredJobs = jobs.filter((job, idx) => {
    const nonEmptySelectedFilters = removeEmptyStringKeys(selectedFilters);
    for (const key in nonEmptySelectedFilters) {
      const selectedFiltersVal = HandleNullNumber(nonEmptySelectedFilters[key]);
      const jobVal = HandleNullNumber(job[key]);
      switch (key) {
        case "companyName":
          return jobVal
            .toLowerCase()
            .includes(selectedFiltersVal.toLowerCase());
        case "employeeNum":
          return selectedFiltersVal === ((idx + 1) * 100).toString();
        default:
          if (jobVal !== selectedFiltersVal) {
            return false;
          }
      }
    }
    return true;
  });
  return (
    <div>
      <div className="centered-view">
        <SelectBox
          label="Roles"
          options={rolesOptions}
          actionSetter={updateRoles}
        />
        <SelectBox
          label="Number Of Employees"
          options={employeesOptions}
          actionSetter={updateNumberOfEmployees}
        />
        <SelectBox
          label="Location"
          options={locationOptions}
          actionSetter={updateLocation}
        />
        <SelectBox
          label="Minimum Experience"
          options={minExperienceOptions}
          actionSetter={updateExperience}
        />
        <SelectBox
          label="Minimum Base Pay Salary"
          options={minSalaryOptions}
          actionSetter={updateMinSalary}
        />
        <SearchBox
          placeholder="Search Company Name"
          actionSetter={updateCompanyName}
        />
      </div>
      <div className="job-container">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div className="job-description-card" key={index}>
              <div className="top-section">
                <div className="posted-details">
                  <HourglassIcon />
                  <span>Posted {index + 1} days ago</span>
                </div>
              </div>
              <div className="company-details">
                <div className="company-logo">
                  <img src={job.logoUrl} alt="Company Logo" />
                </div>
                <div className="company-info">
                  <div className="company-name">{job.companyName}</div>
                  <div>{job.jobRole}</div>
                  <div>{job.location}</div>
                </div>
              </div>
              <div className="expected-salary">
                Estimated Salary: &#8377;{HandleNullNumber(job.minJdSalary)} -{" "}
                {HandleNullNumber(job.maxJdSalary)} LPA <GreenTickIcon />
              </div>
              <div className="about-company">
                <b> About us:</b>
                <div className="blurred-content">
                  <p>{job.jobDetailsFromCompany}</p>
                  <div className="blur-background">
                    <a href={job.jdLink}>View Job</a>
                  </div>
                </div>
              </div>
              <div className="minimum-experience">
                <strong> Minimum Experience</strong>
                {HandleNullNumber(job.minExp)} years
              </div>
              <button className="easy-apply-button" onClick={_=> {redirectToJdUrl(job.jdLink)}}>
                <span className="icon">
                <ThunderIcon />
                </span>
                Easy Apply
              </button>
              <button className="unlock-referral" onClick={_=> {redirectToJdUrl(job.jdLink)}}>
                <span className="icon" >
                  <PeopleIcon />
                </span>
                Unlock referral asks
              </button>
            </div>
          ))
        ) : (
          <div className="not-found">
            Oops.. No any job matched with filtered data{" "}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs,
    selectedFilters: state.selectedFilters,
  };
};

const mapDispatchToProps = {
  updateRoles,
  updateExperience,
  updateLocation,
  updateMinSalary,
  updateCompanyName,
  updateNumberOfEmployees,
};

export default connect(mapStateToProps, mapDispatchToProps)(JobListingsCard);
