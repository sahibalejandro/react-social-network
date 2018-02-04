import React from 'react';
import axios from 'axios';

class Wall extends React.Component {
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

    renderPublications = () => {
        if (! this.state.publicationsLoaded) {
            return <p>Loading publications...</p>;
        }

        if (this.state.errorLoadingPublications) {
            return <p>Can't load publications, try later.</p>;
        }

        return this.state.publications.map(publication =>
            <div key={publication._id} className="publication">
                <p>{publication.body}</p>
            </div>
        );
    };

    render() {
        return (
            <div>
                {this.renderPublications()}
            </div>
        );
    }
}

export default Wall;
