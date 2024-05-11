export const UPDATE_ROLES = "UPDATE_ROLES";
export const UPDATE_EXPERIENCE = "UPDATE_EXPERIENCE";
export const UPDATE_LOCATION = "UPDATE_LOCATION";
export const UPDATE_MIN_SALARY = "UPDATE_MIN_SALARY";
export const UPDATE_COMPANY_NAME = "UPDATE_COMPANY_NAME";
export const UPDATE_EMPLOYEE_NUMBER = "UPDATE_EMPLOYEE_NUMBER";

export const updateRoles = (roles) => ({
  type: UPDATE_ROLES,
  payload: roles,
});

export const updateExperience = (experience) => ({
  type: UPDATE_EXPERIENCE,
  payload: experience,
});

export const updateLocation = (location) => ({
  type: UPDATE_LOCATION,
  payload: location,
});

export const updateMinSalary = (minSalary) => ({
  type: UPDATE_MIN_SALARY,
  payload: minSalary,
});
export const updateCompanyName = (companyName) => ({
  type: UPDATE_COMPANY_NAME,
  payload: companyName,
});
export const updateNumberOfEmployees = (employeeNum) => ({
  type: UPDATE_EMPLOYEE_NUMBER,
  payload: employeeNum,
});
