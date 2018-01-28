import { connect } from 'react-redux';
import MapDisplay from './mapdisplay';

const mapStateToProps = (state) => {
  return {
    apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapDisplay);
