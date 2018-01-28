import { connect } from 'react-redux';

import { toggleClinicDisplay, toggleFoodDisplay, toggleShelterDisplay } from '../actions/ui_actions';
import SampleInputs from './sample_inputs';

const mapStateToProps = (state) => {
  return {
    renderShelters: state.ui.renderShelters,
    renderClinics: state.ui.renderClinics,
    renderFood: state.ui.renderFood
  };
};

const mapDispatchToProps = dispatch => ({
  toggleClinicDisplay: (displayStatus) => dispatch(toggleClinicDisplay(displayStatus)),
  toggleFoodDisplay: (displayStatus) => dispatch(toggleFoodDisplay(displayStatus)),
  toggleShelterDisplay: (displayStatus) => dispatch(toggleShelterDisplay(displayStatus))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleInputs);
