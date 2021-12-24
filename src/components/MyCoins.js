import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import Img1 from '../img01.png'
import Img2 from '../img02.png'
import Img3 from '../img03.png'
import Img4 from '../img04.png'
import Img5 from '../img05.png'
import Img6 from '../img06.png'
import Img7 from '../img07.png'
import Img8 from '../img08.png'
import Img9 from '../img09.png'
import Hero from './Hero';
const propTypes = {};

const defaultProps = {};

class MyCoins extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <>
            <section className='mc-sec'>
                <div className='mc-bg'> </div>
                <div className='mc-text p-5 bg-white'>
                    <p>My Builder Coins</p>
                    <h1>Get Builder and Stake</h1>
                    <Button size="lg" variant="primary">Login</Button>

                </div>
            </section>
            {/* ////////////////////////// */}
            <section className="sec5">
                <div className='text-center'>
                    <h1>Before you build</h1>
                </div>
                <div className="container">
                    <Row>
                        <Col sm={2}></Col>
                        <Col sm={8}>
                            <div className='p-4'>
                                <h3>Get a digital wallet to hold your Builder Coins.</h3>
                                <p>A crypto wallet is like a debit card. Debit cards do not store funds but instead, they give people access to their funds wherever they choose to spend them.
                                </p>
                                <p>
                                    Wallets in the blockchain universe similarly do not store funds but instead provide people with access to their tokens and the ability to make transactions with them.</p>
                                <Button size="lg" variant="secondary">GET Metamask</Button>
                                <br />
                                <br />
                                <h3> Fund your wallet with USDC</h3>
                                <p>You can buy USDC from exchange or from wallets directly. Here are a few our favorites : MetaMask, Crypto.com, Coinbase
                                </p>
                            </div>

                        </Col>

                    </Row>
                </div>
            </section>
            {/* ////////////////////////// */}
            {/* ////////////////////////// */}
            <section className="sec6 p-5">
                <div className='text-center'>
                    <h1 className='text-blue'>Get your Builder Coin</h1>
                </div>
                <div className="container">
                    <Row>
                        <Col sm={12}>
                            <div className=''>
                                <h3 className='text-white'>USDC - Builder Coin</h3>
                                <Container>
                                    <Row>
                                        <Col>
                                            <Row>
                                                <Col><h4 className='text-white'>USDC</h4></Col>
                                                <Col><h4 className='text-white text-right'>0.00</h4></Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <Col><h4 className='text-white'>Builder Coin</h4></Col>
                                                <Col><h4 className='text-white text-right'>0.00</h4></Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            {/* ////////////////////////// */}
            {/* ////////////////////////// */}
            <section className="sec5 bg-white">
                <div className="container">
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={6}>
                            <div className='text-center p-4'>
                                <Button size="lg" variant="primary">BUY BUILDER COIN</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            {/* ////////////////////////// */}
            {/* ////////////////////////// */}
            <section className="sec7 mc-bg2">
                <div className="container">
                    <Row>
                        <Col sm={12}>
                            <div className='p-4 text-center'>
                                <h1 className='text-white'>My Stake Business</h1>
                            </div>
                        </Col>

                    </Row>
                </div>
            </section>
            {/* ////////////////////////// */}
            {/* ////////////////////////// */}
            <section className="sec6 p-5 bg-white">
                <Container>
                    <Row>
                        <Col sm={2}></Col>
                        <Col sm={8}>
                            <div className='p-4'>
                                <h1 className='text-blue'>Principle Contracts</h1>
                                <Container>
                                    <Row className='p-4'>
                                        <Col>
                                            <h4 className=''>Contract 00145</h4>
                                            <small>4 weeks to complete</small>
                                        </Col>
                                        <Col>
                                            <h4 className=' text-right'>88.00 BC</h4>
                                        </Col>
                                    </Row>
                                    <Row className='p-4'>
                                        <Col>
                                            <h4 className=''>Contract 00430</h4>
                                            <small>26 weeks to complete</small>
                                        </Col>
                                        <Col>
                                            <h4 className=' text-right'>176.00 BC</h4>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <div className='p-4'>
                                <h1 className='text-blue'>Earnings</h1>
                                <small>(Updated in every 30 sec)

                                </small>
                                <Container>
                                    <Row className='p-4'>
                                        <Col>
                                            <h4 className=''>Contract 00145
                                            </h4>
                                        </Col>
                                        <Col>
                                            <h4 className=' text-right'>68.84 BC
                                            </h4>
                                        </Col>
                                    </Row>
                                    <Row className='p-4'>
                                        <Col>
                                            <h4 className=''>Contract 00430
                                            </h4>
                                        </Col>
                                        <Col>
                                            <h4 className=' text-right'>0.00 BC
                                            </h4>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <div className='p-4'>
                                <h1 className='text-blue'>Total Earnings </h1>
                                <small>(Updated in every 30 sec)</small>
                                <Container>
                                    <Row className='p-4'>
                                        <Col>
                                            <h4 className=''>Contract 00145
                                            </h4>
                                        </Col>
                                        <Col>
                                            <h4 className=' text-right'>73.64 BC</h4>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <div className='p-4'>
                                <h1 className='text-blue'>Downlines</h1>
                                <Container>
                                    <Row className='p-4' >
                                        <Col>
                                            <h4 className=''>Level 1</h4>
                                        </Col>
                                        <Col>
                                            <h4 className=' text-right'>2</h4>
                                        </Col>
                                    </Row>
                                    <Row className='p-4'>
                                        <Col>
                                            <h4 className=''>Level 2</h4>
                                        </Col>
                                        <Col>
                                            <h4 className=' text-right'>6</h4>
                                        </Col>
                                    </Row>
                                    <Row className='p-4'>
                                        <Col>
                                            <h4 className=''>Level 3</h4>
                                        </Col>
                                        <Col>
                                            <h4 className=' text-right'>1</h4>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* ////////////////////////// */}

        </>;
    }
}

MyCoins.propTypes = propTypes;
MyCoins.defaultProps = defaultProps;
// #endregion

export default MyCoins;