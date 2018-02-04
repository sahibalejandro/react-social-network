import React from 'react';
import { Route, Redirect } from 'react-router-dom';

class ProtectedRoute extends React.Component {
    state = {
        auth: false,
    };

    render() {
        const {component: Component, ...rest} = this.props;
        return <Route {...rest} render={props => this.state.auth
            ? <Component {...props} />
            : <Redirect to="/login" />
        } />;
    }
};

export default ProtectedRoute;
