import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

var show = false;
var MenuLink = 'Menu-Link';

class Menu extends React.Component{

    
    constructor() {
        super()
        this.state = {
            MenuLink: 'Menu-Link',
            show: false
        }
    }

    ShowMenu(){
        if (this.state.show){
            this.setState({show: false, MenuLink: 'Menu-Link'});
        }
        else {
            this.setState({show: true, MenuLink: 'Menu-Link-Hidden'});
        }
        //alert(MenuLink);
    }

    render() {
        return(
            <div className="Menu">
            <Link to="/" className="Logo">Ryan Caigoy</Link>

            <div className="Menu-Navigation">
                <div className="Hamburger" 
                    onClick={() => this.ShowMenu(show)}
                >
                    <i className="fas fa-bars fa-2x"></i>
                </div>
                <Link to="/" className={this.state.MenuLink}
                >Home</Link>
                <a href="/Interactive-Portfolio" className={this.state.MenuLink}>
                    Interactive Portfolio
                </a>
            </div>
        </div>
        );
    }
}

export default Menu;