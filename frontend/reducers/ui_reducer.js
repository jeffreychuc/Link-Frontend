import merge from 'lodash/merge';
import { TOGGLE_SHELTER_DISPLAY,
         TOGGLE_CLINIC_DISPLAY,
         TOGGLE_FOOD_DISPLAY } from '../actions/ui_actions';

const initialState = {
  renderShelters: true,
  renderClinics: true,
  renderFood: true
};

const uiReducer = (state = initialState, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_SHELTER_DISPLAY:
      return merge({}, state, { renderShelters: action.displayState });
    case TOGGLE_CLINIC_DISPLAY:
      return merge({}, state, { renderClinics: action.displayState });
    case TOGGLE_FOOD_DISPLAY:
      return merge({}, state, { renderFood: action.displayState });
    default:
      return state;
  }
};

export default uiReducer;
