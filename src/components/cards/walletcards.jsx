import React from "react";
import Card from 'react-bootstrap/Card';
import metamask from '../../assets/wallets/metamask.png'
import bitski from '../../assets/wallets/bitski.png'
import formatic from '../../assets/wallets/formatic.png'
import walletconnect from '../../assets/wallets/walletconnect.png'
import coinbase from '../../assets/wallets/coinbase.png'
import arkane from '../../assets/wallets/arkane.png'

export default function Walletcards(){
    return(
        <>
        <div className="container">
       <div className="row">
        <div className="col-lg-1 col-md-2 ">
        <Card className="walletbox">
        <a href="#">
        <Card.Img variant="top" src={metamask}/>
        <h4>Metamask</h4>
        </a>
        </Card>
        </div>

        <div className="col-lg-1 col-md-2 ">
        <Card className="walletbox">
        <a href="#">
        <Card.Img variant="top" src={bitski}/>
        <h4>Bitski</h4>
        </a>
        </Card>
        </div>

        <div className="col-lg-1 col-md-2 ">
        <Card className="walletbox">
        <a href="#">
        <Card.Img variant="top" src={formatic}/>
        <h4>Formatic</h4>
        </a>
        </Card>
        </div>

        <div className="col-lg-1 col-md-2 ">
        <Card className="walletbox">
        <a href="#">
        <Card.Img variant="top" src={walletconnect}/>
        <h4>WalletConnect</h4>
        </a>
        </Card>
        </div>

        <div className="col-lg-1 col-md-2 ">
        <Card className="walletbox">
        <a href="#">
        <Card.Img variant="top" src={coinbase}/>
        <h4>Coinbase Wallet</h4>
        </a>
        </Card>
        </div>

        <div className="col-lg-1 col-md-2 ">
        <Card className="walletbox">
        <a href="#">
        <Card.Img variant="top" src={arkane}/>
        <h4>Arkane</h4>
        </a>
        </Card>
        </div>

       </div>
       </div>
</>
);
}