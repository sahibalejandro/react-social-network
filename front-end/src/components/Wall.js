import React from 'react';

class Wall extends React.Component {

    renderPublications = () => {
        return this.props.publications.map(publication =>
            <div key={publication._id} className="publication">
                <p>{publication.body}</p>
            </div>
        );
    };

    render() {
        return (
            <div className="wall">
                {this.props.publications.length === 0
                    ? <p>This wall has no publications, write one!</p>
                    : this.renderPublications()
                }
            </div>
        );
    }
}

export default Wall;