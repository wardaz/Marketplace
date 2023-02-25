import './latestcards.css'

import Card from 'react-bootstrap/Card';

import news1 from '../../assets/card/news1.jpg'
import news2 from '../../assets/card/news2.jpg'
import news3 from '../../assets/card/news3.jpg'

function LatestNews() {
  return (
    <>
    <h4 className='latest-news-1'>Latest News</h4>
    <div className="container">
    <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
    <Card className='latest-news' style={{ border:"none" }}>
      <Card.Img variant="top" src={news1} />
      <span className='label label-rounded'>TIPS AND TRICKS</span>
      <Card.Body>
      <span className='latest-date'>OCTOBER 28, 2020</span>
      <a href="#">
        <Card.Title>How to create NFT item</Card.Title>
        </a>
        <Card.Text>
        The NFT can be associated with a particular digital or physical asset such as images, art, music, and sport highlights and may confer licensing rights....
        </Card.Text>
      </Card.Body>
    </Card>
    
    </div>

    <div className="col-12 col-md-6 col-lg-4">
    <Card className='latest-news' style={{ border:"none" }}>
      <Card.Img variant="top" src={news2}/>
      <span className='label label-rounded'>TIPS AND TRICKS</span>
      <Card.Body>
      <span className='latest-date'>OCTOBER 28, 2020</span>
      <a href="#">
        <Card.Title>How to sell NFT item</Card.Title>
        </a>
        <Card.Text>
        NFTs function like cryptographic tokens, but unlike cryptocurrencies such as Bitcoin or Ethereum, NFTs are not mutually interchangeable...        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className="col-12 col-md-6 col-lg-4">
    <Card className='latest-news' style={{ border:"none" }}>
      <Card.Img variant="top" src={news3} />
      <span className='label label-rounded'>TIPS AND TRICKS</span>
      <Card.Body>
      <span className='latest-date'>OCTOBER 28, 2020</span>
      <a href="#">
        <Card.Title>Where to sell NFT item</Card.Title>
        </a>
        <Card.Text>
        The ownership of an NFT as defined by the blockchain has no inherent legal meaning, and does not necessarily grant copyright, intellectual property...        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    </div>
    </div>
    </>
  );
}

export default LatestNews;