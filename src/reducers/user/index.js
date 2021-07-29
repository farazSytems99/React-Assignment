import types from '../types';

const initialState = {
  employees: [],
  projects: [],
  departments: [],
  shifts: [],
  isLoggedIn: false,
  isFetching: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return Object.assign({}, state, {
        isLoggedIn: true,
      });
    case types.logout: {
      return Object.assign({}, state, {
        isLoggedIn: false,
      });
    }
    case types.projects: {
      return Object.assign({}, state, {
        projects: action.payload,
      });
    }
    case types.employees: {
      return Object.assign({}, state, {
        employees: action.payload,
      });
    }
    case types.departments: {
      return Object.assign({}, state, {
        departments: action.payload,
      });
    }
    case types.shifts: {
      return Object.assign({}, state, {
        shifts: action.payload,
      });
    }

    default:
      return state;
  }
};

export default user;
