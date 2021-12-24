import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'

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

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <>
            <Hero />
            {/* ////////////////////////// */}
            <section className="sec2">
                <div className="container">
                    <Row>
                        <Col sm={2}></Col>
                        <Col sm={8}>
                            <div className='text-center'>
                                <h1>BuilderDefi</h1>
                                <h4>
                                    BUILDER is the future of decentralized finance, a one-of-a-kind distributed business building platform that enables the creation of decentralized apps (DApps). BUILDER leverages the power of its financial technologies with an incentivized network community.
                                </h4>
                            </div>
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                </div>
            </section>
            {/* ////////////////////////// */}
            <div className="video p-5"></div>
            {/* ////////////////////////// */}
            <div className="text-center p-5">
                <h1 className='text-blue'>BUILDER DEFI FINANCIAL SYSTEM</h1>
            </div>
            {/* ////////////////////////// */}
            <section>
                <div className="container my-4">
                    <Row>
                        <Col sm={4}>
                            <h2 className='text-center text-white mb-3'>Cryptography</h2>
                            <Card >
                                <Card.Img variant="top" src={Img1} />
                                <Card.Body>
                                    {/* <Card.Title>Cryptography</Card.Title> */}
                                    <Card.Text>
                                        <h5>Security</h5>
                                        <p>
                                            Cryptography ensures that attackers can’t forge transaction and other interaction on your behalf.
                                        </p>

                                        <h5>Safety</h5>
                                        <p>
                                            You don't need to share your real world identity. Your Ethereum account and wallet serve as you login credentials.
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <h2 className='text-center text-white mb-3'>Decentralization</h2>
                            <Card >
                                <Card.Img variant="top" src={Img3} />
                                <Card.Body>
                                    <Card.Text>
                                        <h5>Transparent</h5>
                                        <p> Full access and visibility to information and protocol.</p>
                                        <h5>Control</h5>
                                        <p> You don't need to share your real world identity. Your Ethereum account and wallet serve as you login credentials.</p>
                                        <h5>Fair</h5>
                                        <p>Permissionless and censorship resistant.</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <h2 className='text-center text-white mb-3'>Blockchain</h2>
                            <Card >
                                <Card.Img variant="top" src={Img2} />
                                <Card.Body>
                                    {/* <Card.Title>Blockchain</Card.Title> */}
                                    <Card.Text>
                                        <h5>Efficient</h5>
                                        <p>No human involvement with operations handled immediately and globally.
                                        </p>
                                        <h5>Open</h5>
                                        <p>Anyone can build within or on-top of existing application.
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                {/* //////////////////////////////////// */}
                <div className="container my-4">
                    <Row>
                        <Col sm={4}>
                            <h2 className='text-center text-white mb-3'>Application</h2>

                            <Card >
                                <Card.Img variant="top" src={Img4} />
                                <Card.Body>
                                    {/* <Card.Title>Application</Card.Title> */}
                                    <Card.Text>
                                        <h5>Ecosystem</h5>
                                        <p>
                                            BUILDER is a global economy of decentralized application with autonomous DApp reliance and distribution.
                                        </p>
                                        <h5>Safety</h5>
                                        <p>BUILDER gives DeFi creators a platform to connect with users, while compensating them for their time and effort.
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <h2 className='text-center text-white mb-3'>Finance</h2>
                            <Card >
                                <Card.Img variant="top" src={Img5} />
                                <Card.Body>
                                    {/* <Card.Title>Finance</Card.Title> */}
                                    <Card.Text>
                                        <h5>Token</h5>
                                        <p>A high value digital assets that fuel powerful new DeFi innovations and promotions deep liquidity to ensure capital input is proportional to the supply</p>
                                        <h5>Technology</h5>
                                        <p> NRGY is build on groundbreaking new technologies that favor the financial success of the applications.
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <h2 className='text-center text-white mb-3'>Distribution</h2>
                            <Card >
                                <Card.Img variant="top" src={Img6} />
                                <Card.Body>
                                    {/* <Card.Title>Distribution</Card.Title> */}
                                    <Card.Text>
                                        <h5>Network
                                        </h5>
                                        <p>The first fully decentralized distribution network (DDN) with build-in referral rewards and market incentives.
                                        </p>
                                        <h5>Open</h5>
                                        <p>
                                            The incentivized network structure combines balanced payments with unmatched security and transparency. </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
            <section>
                <Row>
                    <Col className='bg2 p-0'><div></div></Col>
                    <Col className='p-0'><div className='p-5 bg-white'>
                        <p>TOKENOMICS</p>
                        <h1>SECURING THE NEW FINANCIAL FRONTIER</h1>
                        <p>
                            A high-value digital asset designed to secure the future -- Builder Coin is a strong, liquid cryptocurrency token that fuels powerful new DeFi innovations.
                        </p>
                        <p>
                            Fair market principals from the start, are used to deep liquidity of Builder Coin to ensure capital input is proportional to the supply.
                        </p>
                    </div></Col>
                </Row>
            </section>
            {/* ////////////////////////// */}
            <section className="sec5">
                <div className='text-center'>
                    <h1>A COIN BUILT TO RULE</h1>
                </div>
                <div className="container">
                    <Row>
                        <Col sm={7}>
                            <div className='p-4'>
                                <h3>$BUILDER ON ETHEREUM</h3>
                                <p>Builder Coin on USDC is an investment coin designed to function inside its own ecosystem, providing functional liquidity and attractive rewards to stakeholders.</p>
                                <ul>
                                    <li>
                                        Builder Coin is a strong liquid currency that fuels independent developers
                                    </li>
                                    <li>  Builder Coin's high APY potential is attractive to investors and developers due to its limited supply and robust reward system.

                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={5}>
                            <div className=''>
                                <h3>Seen on: </h3>
                                <p ><a className='find-link' href="https://v2.info.uniswap.org/pair/0x51bf9908dac4a283d017edc071d954ec3a4b1376">https://v2.info.uniswap.org/pair/0x51bf9908dac4a283d017e...</a></p>
                            </div>
                            <Button size="lg" variant="secondary" >  FIND OUT MORE</Button>
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                </div>
            </section>
            {/* ////////////////////////// */}
            {/* ////////////////////////// */}
            <section className="sec6 p-5">
                <div className='text-center'>
                    <h1 className='text-blue'>STAKING DESIGNED TO INCENTIVIZE YOU</h1>
                </div>
                <div className="container">
                    <Row>
                        <Col sm={2}>
                        </Col>
                        <Col sm={8}>
                            <div className=''>
                                <h3 className='text-white'> STAKING BUILDER
                                </h3>
                                <p className='text-white'>Staking BUILDER provides lucrative rewards for Market Maker Stakers who lock up Builder coins to provide economic security for the BUILDER DeFi financial ecosystem. Unlike other DeFi projects, BUILDER staking incorporates several new income opportunities for investors.</p>
                            </div>
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                </div>
            </section>
            {/* ////////////////////////// */}
            {/* ////////////////////////// */}
            <section className="sec7 bg7 p-4">
                <div className="container">
                    <Row>
                        <Col sm={8}>
                            <div className='p-4'>
                                <h1 className='text-white'>Where Do Rewards Come From?Welcome visitors & announce promotions</h1>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className='p-4'>
                                <Button size="lg" variant="primary">GET STAKING</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="sec7 bg-white p-4">
                <div className="container">
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={8}>
                            <div className='p-4'>
                                <p>Market Maker Staking algorithm targets a 4% compounded weekly yield as new coins are minted. Each coin minted into circulation from Market Maker Stakers (MMS) creates an equal reward paid to stakers over a three week period.
                                    Staking rewards are generated and distributed to staked BUILDER holders in three ways:</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            {/* ////////////////////////// */}
            {/* //////////////////////////////////// */}
            <div className="container my-4">
                <Row>
                    <Col sm={4}>
                        <Card >
                            <Card.Img variant="top" src={Img7} />
                            <Card.Body>
                                <Card.Title>4% Minting Reward Target
                                </Card.Title>
                                <Card.Text>
                                    <p>BUILDER minted through Market Maker Staking (MMS) producing up to a targeted 4% weekly rewards over 100 weeks.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card >
                            <Card.Img variant="top" src={Img8} />
                            <Card.Body>
                                <Card.Title>20% DApp Royalty Rewards
                                </Card.Title>
                                <Card.Text>
                                    <p>Decentralized Applications built on BUILDER share produced royalty revenues with BUILDER stakers.
                                        *must stake 25 coins or more to share in DApp Reward</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card >
                            <Card.Img variant="top" src={Img9} />
                            <Card.Body>
                                <Card.Title>25% Builder Referral Rewards
                                </Card.Title>
                                <Card.Text>
                                    <p>BUILDER incorporates the first fully decentralized distribution network (DDN) with built-in referral rewards and market incentives.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div></>;
    }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
// #endregion

export default Home;