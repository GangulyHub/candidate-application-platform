import { getSampleJdJSON } from "../data/SampleJdData";
import { UPDATE_ROLES ,UPDATE_EXPERIENCE , UPDATE_LOCATION , UPDATE_MIN_SALARY, UPDATE_COMPANY_NAME, UPDATE_EMPLOYEE_NUMBER} from './FilterActions';
export const initialState = {
    jobs:getSampleJdJSON(),
    selectedFilters: {
        jobRole: "",
        minExp: "",
        location: "",
        minJdSalary:"",
        companyName:"",
        employeeNum:"",
    },
};

const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_ROLES:
        return {
          ...state,
          selectedFilters: {
            ...state.selectedFilters,
            jobRole: action.payload
          }
        };
      case UPDATE_EXPERIENCE:
        return {
          ...state,
          selectedFilters: {
            ...state.selectedFilters,
            minExp: action.payload
          }
        };
      case UPDATE_LOCATION:
        return {
          ...state,
          selectedFilters: {
            ...state.selectedFilters,
            location: action.payload
          }
        };
      case UPDATE_MIN_SALARY:
        return {
          ...state,
          selectedFilters: {
            ...state.selectedFilters,
            minJdSalary: action.payload
          }
        };
    case UPDATE_COMPANY_NAME:
        return {
            ...state,
            selectedFilters: {
              ...state.selectedFilters,
              companyName: action.payload
            }
          };
          case UPDATE_EMPLOYEE_NUMBER:
            return {
                ...state,
                selectedFilters: {
                  ...state.selectedFilters,
                  employeeNum: action.payload
                }
              };
      default:
        return state;
    }
  };

export default jobsReducer;