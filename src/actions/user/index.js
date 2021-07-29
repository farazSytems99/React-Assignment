import API from '../../API';
import types from '../../reducers/types';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const login = () => {
  return (dispatch) => {
    dispatch({ type: types.login });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: types.logout });
  };
};

export const fetchEmployees = () => {
  return (dispatch) => {
    return API.get(`employees`)
      .then((res) => {
        dispatch({ type: types.employees, payload: res.data });
      })
      .catch((err) => console.log('error', err));
  };
};

export const fetchProjects = () => {
  return (dispatch) => {
    return API.get(`projects`)
      .then((res) => {
        console.log({ res });
        dispatch({ type: types.projects, payload: res.data });
      })
      .catch((err) => console.log('error', err));
  };
};

export const fetchDepartments = () => {
  return (dispatch) => {
    return API.get(`departments`)
      .then((res) => {
        dispatch({ type: types.departments, payload: res.data });
      })
      .catch((err) => console.log('error', err));
  };
};

export const fetchShifts = () => {
  return (dispatch) => {
    return API.get(`shifts`)
      .then((res) => {
        dispatch({ type: types.shifts, payload: res.data });
      })
      .catch((err) => console.log('error', err));
  };
};

export const assignEmployee = (params) => {
  return (dispatch) => {
    return API.post(`projects`, params)
      .then((res) => {
        if (res.status === 200) {
          dispatch(fetchProjects());
        }
        // dispatch({ type: types.departments, payload: res.data });
      })
      .catch((err) => console.log('error', err));
  };
};
