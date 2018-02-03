import React, {Component} from 'react';
import axios from 'axios';
import Wall from './components/Wall';
import Navbar from './components/Navbar';
import PublicationForm from './components/PublicationForm';

class App extends Component {
    state = {
        publications: [],
        errorLoadingPublications: false,
        publicationsLoaded: false,
    };

    componentDidMount() {
        this.loadPublications();
    }

    loadPublications = async () => {
        try {
            const res = await axios.get('/api/publications');
            this.setState({publications: res.data});
        } catch (err) {
            this.setState({errorLoadingPublications: true});
        }

        this.setState({publicationsLoaded: true});
    };

    handlePublish = (publication) => {
        this.setState({
            publications: this.state.publications.concat(publication),
        });
    };

    render() {
        const wall = this.state.publicationsLoaded
            ? <Wall publications={this.state.publications}/>
            : <p>Loading publications...</p>;

        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <PublicationForm onPublish={this.handlePublish}/>
                        </div>
                    </div>
                    <hr/>
                    {this.state.errorLoadingPublications
                        ? <p>Error loading publications, try again later.</p>
                        : wall
                    }
                </div>
            </div>
        );
    }
}

export default App;
