import React from 'react';
const propTypes = {};

const defaultProps = {};

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <div className='hero'>
            <h1>A BETTER FINANCIAL SYSTEM FOR EVERYONE</h1>
            <h4>WELCOME TO BUILDER</h4>
        </div>;
    }
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;
// #endregion

export default Hero;