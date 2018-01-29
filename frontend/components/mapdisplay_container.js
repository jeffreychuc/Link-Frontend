import { connect } from 'react-redux';
import MapDisplay from './mapdisplay';

const mapStateToProps = (state) => {
  return {
    renderShelters: state.ui.renderShelters,
    renderClinics: state.ui.renderClinics,
    renderFood: state.ui.renderFood
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapDisplay);
