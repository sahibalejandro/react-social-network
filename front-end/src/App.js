import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Navbar from './components/Navbar';
import PublicationForm from './components/PublicationForm';
import Wall from './components/Wall';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
    handlePublish = (publication) => {
        console.log(publication);
    };

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <PublicationForm onPublish={this.handlePublish}/>
                    <ProtectedRoute exact path="/" component={Wall} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </div>
            </div>
        );
    }
}

export default App;
