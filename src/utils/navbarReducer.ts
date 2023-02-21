import { State } from '../types/types';

function navbarReducer(state: State, action: any) {
  switch (action) {
    case 'dropdown':
      return {
        ...state,
        dropdownToggle: !state.dropdownToggle,
        dropdownToggleSecond: false,
      };
    case 'dropdown2':
      return {
        ...state,
        dropdownToggleSecond: !state.dropdownToggleSecond,
        dropdownToggle: false,
      };
    case 'navbar':
      return {
        ...state,
        navbarToggle: !state.navbarToggle,
      };
    case 'escape':
      return {
        ...state,
        dropdownToggle: false,
        dropdownToggleSecond: false,
      };
    default:
      return state;
  }
}

export default navbarReducer;
