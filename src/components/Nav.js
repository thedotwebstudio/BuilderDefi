import React from 'react';
import { Link } from 'react-router-dom';

const propTypes = {};

const defaultProps = {};

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">BUILDER <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/my-coins">MY COINS</Link>
                        </li>
                    </ul>
                    {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Button</button> */}
                </div>
            </nav>
        </div>;
    }
}

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
// #endregion

export default Nav;