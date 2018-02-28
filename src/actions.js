export const CHANGE_NAME = Symbol('CHANGE_NAME');
export const CHANGE_EMAIL = Symbol('CHANGE_NAME');
export const SUBMIT_FORM = Symbol('SUBMIT_FORM');

export function changeName(name) {
  return {
    type: CHANGE_NAME,
    payload: name,
  };
}

export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    payload: email,
  };
}

export function fetchData() {
  return dispatch => {
    dispatch(changeEmail('daniel@ooma.com'));
    dispatch(changeName('Daniel G'));
  };
}

export function submitForm(data) {
  return dispatch => {
    dispatch({
      type: SUBMIT_FORM,
      payload: data,
    });
    return Promise.resolve().then(() => {
      dispatch(changeEmail(data.email));
      dispatch(changeName(data.name));
    });
  }
}
