import React from 'react'
import PropTypes from 'prop-types'

class Input extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        errors: PropTypes.object.isRequired,
    }

    render() {
        return <input className={`form-control ${this.props.errors[this.props.name] ? 'is-invalid' : null}`} {...this.props} />
    }
}

export default Input
