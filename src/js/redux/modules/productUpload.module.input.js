import { createAction } from "redux-act";

export const handleFileInput = createAction(
  "handle file upload",
  fileReader => fileReader
);
export const setDefaultState = createAction("set default state");
export const handleTextInput = createAction("handle text input", data => data);

export const reducer = {
  [handleFileInput]: (state, fileReader) => {
    try {
      const data = fileReader();
      const newState = {
        ...state,
        file: { data: data }
      };
      return newState;
    } catch (e) {
      const newState = {
        ...state,
        file: { error: e.message }
      };
      return newState;
    }
  },
  [handleTextInput]: (state, data) => {
    const newState = {
      ...state,
      ...data
    };
    return newState;
  },
  [setDefaultState]: state => ({
    file: {},
    jobSheetName: ""
  })
};
