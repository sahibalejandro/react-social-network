import React from 'react';
import axios from 'axios';

class PublicationForm extends React.Component {

    state = {
        form: {
            body: '',
        },
        publishing: false,
        errorPublishing: false,
    };

    updateForm = (name, value) => {
        this.setState(prevState => ({
            form: {
                ...prevState.form,
                [name]: value,
            }
        }));
    };

    handleChange = (e) => {
        this.updateForm(e.target.name, e.target.value);
    };

    handleClick = async (e) => {
        e.preventDefault();
        this.setState({errorPublishing: false, publishing: true});

        try {
            const res = await axios.post('/api/publications', this.state.form);
            this.props.onPublish(res.data);
            this.updateForm('body', '');
        } catch (err) {
            console.error(err);
            this.setState({errorPublishing: true});
        }

        this.setState({publishing: false});
    };

    render() {
        return (
            <div className="publication-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="body">What's going on?</label>
                        <textarea
                            className="form-control"
                            name="body"
                            id="body"
                            onChange={this.handleChange}
                            value={this.state.form.body}
                        />
                    </div>

                    <button
                        className="btn btn-primary"
                        type="submit"
                        disabled={this.state.publishing}
                        onClick={this.handleClick}
                    >
                        Publish
                    </button>

                    {this.state.errorPublishing
                        ? <p>Failed to publish your status, try again.</p>
                        : null
                    }
                </form>
            </div>
        );
    }
}

export default PublicationForm;