import React from "react";
import Card from 'react-bootstrap/Card';
import metamask from '../../assets/wallets/metamask.png'
import bitski from '../../assets/wallets/bitski.png'
import formatic from '../../assets/wallets/formatic.png'
import walletconnect from '../../assets/wallets/walletconnect.png'
import coinbase from '../../assets/wallets/coinbase.png'
import arkane from '../../assets/wallets/arkane.png'

import './walletcards.css'

export default function Walletcards() {
    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-md-2 col-sm-6 col-6">
                        <Card className="walletbox">
                            <Card.Img variant="top" src={metamask} />
                            <Card.Body>
                                <Card.Text>
                                    Metamask
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-2 col-sm-6 col-6">
                        <Card className="walletbox">

                            <Card.Img variant="top" src={bitski} />
                            <Card.Body>
                                <Card.Text className="text-center">
                                   Bitski
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-2 col-sm-6 col-6">
                        <Card className="walletbox">

                            <Card.Img variant="top" src={formatic} />
                            <Card.Body>
                                <Card.Text className="text-center">
                                   Formatic
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-2 col-sm-6 col-6">
                        <Card className="walletbox">

                            <Card.Img variant="top" src={walletconnect} />
                            <Card.Body>
                                <Card.Text className="text-center">
                                    Wallet Connect
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-2 col-sm-6 col-6">
                        <Card className="walletbox">
                            
                                <Card.Img variant="top" src={coinbase} />
                                <Card.Body>
                                <Card.Text className="text-center">
                                Coinbase Wallet
                                </Card.Text>
                            </Card.Body>
                               
                        </Card>
                    </div>

                    <div className="col-md-2 col-sm-6 col-6">
                        <Card className="walletbox">
                            
                                <Card.Img variant="top" src={arkane} />
                                <Card.Body>
                                <Card.Text className="text-center">
                                Arkane
                                </Card.Text>
                            </Card.Body>
                               
                        </Card>
                    </div>


                </div>
            </div>
        </>
    );
}