import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return <div> <form className="needs-validation" novalidate="">
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label for="firstName">Dropdown</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="col-md-6 mb-3">
                    <label for="lastName">Input Text</label>
                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button class="btn btn-primary btn-lg btn-block" type="submit">Button</button>
                </div>
            </div>
        </form>
        </div>;
    }
}

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
// #endregion

export default Nav;