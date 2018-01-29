export const TOGGLE_SHELTER_DISPLAY = 'TOGGLE_SHELTER_DISPLAY';
export const TOGGLE_FOOD_DISPLAY = 'TOGGLE_FOOD_DISPLAY';
export const TOGGLE_CLINIC_DISPLAY = 'TOGGLE_CLINIC_DISPLAY';

export const toggleShelterDisplay = (displayState) => ({
  type: TOGGLE_SHELTER_DISPLAY,
  displayState: !displayState
});

export const toggleFoodDisplay = (displayState) => ({
  type: TOGGLE_FOOD_DISPLAY,
  displayState: !displayState
});

export const toggleClinicDisplay = (displayState) => ({
  type: TOGGLE_CLINIC_DISPLAY,
  displayState: !displayState
});
