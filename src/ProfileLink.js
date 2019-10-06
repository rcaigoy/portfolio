import React from 'react'
import { Route , withRouter, Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class ProfileLink extends React.Component {
    render(props) {

        if (this.props.IsExternal != "true"){
        return (
            <Link to={this.props.link} className="Link">
                <img src={this.props.pic} />
                <div className="Link-Text">{this.props.text}</div>
            </Link>
        );
        }
        else {
            return (
                <a href={this.props.link} className="Link"
                    target={this.props.target}
                >
                    <img src={this.props.pic} />
                    <div className="Link-Text">{this.props.text}</div>
                </a>
            );
        }
    };
}

export default ProfileLink