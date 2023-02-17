import Navbar1 from '../components/navbar'
import Footer from '../components/footer'
import Walletcards from '../components/cards/walletcards'
import Hero from '../components/hero';

function Homepage() {
  return (
    <div className="App">
      <Navbar1/>
    
    <Hero/>
    
      <Walletcards/>

      <div className=''>
      <Footer/>
      </div>

     
    
    </div>
  );
}

export default Homepage;
