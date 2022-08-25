import React from "react"
import PropTypes from "prop-types"
class SampleComponent extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.title}
      </React.Fragment>
    );
  }
}

SampleComponent.propTypes = {
  title: PropTypes.string
};
export default SampleComponent
