import React from 'react'
import PropTypes from 'prop-types'

class Input extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        errors: PropTypes.object.isRequired,
    }

    classNames = () => {
        const classNames = ['form-control']

        if (this.props.errors[this.props.name]) {
            classNames.push('is-invalid')
        }

        return classNames.join(' ')
    }

    render() {
        return <input className={this.classNames()} {...this.props} />
    }
}

export default Input
