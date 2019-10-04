import React from 'react'
import { Route , withRouter, Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class ProfileLink extends React.Component {
    render(props) {
        return (
            <Link to={this.props.link} className="Link">{this.props.text}</Link>
        );
    };
}

export default ProfileLink