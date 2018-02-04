import React from 'react'
import PropTypes from 'prop-types'

class ValidationMessage extends React.Component {
    static propTypes = {
        input: PropTypes.string.isRequired,
        errors: PropTypes.object.isRequired,
    }

    render() {
        return this.props.errors[this.props.input]
            ? <div className="invalid-feedback">{this.props.errors[this.props.input].msg}</div>
            : null
    }
}

export default ValidationMessage
