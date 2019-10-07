import React from 'react';
import { Route , withRouter, Link} from 'react-router-dom';
import ProfileLink from '../ProfileLink'

function BlogLink(props){
    return (
        <Link to={props.link} className="Blog-Link">
            <img src={props.pic} />
            <div className="Blog-Link-Text">{props.text}</div>
        </Link>
    );
}

export default BlogLink;