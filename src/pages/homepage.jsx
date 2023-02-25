import Navbar1 from '../components/navbar'
import Footer from '../components/footer'
import Walletcards from '../components/cards/walletcards'
import TrendSlider from '../components/slider/trendslider'
import Hero from '../components/hero';
import Categorycards from '../components/cards/categorycard'
import LatestNews from '../components/cards/latestcards'

// import popular from '../assets/card/popular.jpg'


function Homepage() {
  return (
    <div className="">
      <Navbar1/>
    
      <Hero/>
    
      <Walletcards/>
        
      
        <div className="trendingslide"><h4>Trending NFTs</h4>
        {/* <div className="trendb">
        <button className='trendb-prev'>
        <i class="fa-solid fa-less-than"></i>
       </button> */}
        <TrendSlider/>
        {/* <button className='trendb-next'>
        <i class="fa-solid fa-greater-than"></i>       
        </button>
        </div> */}
        </div>

      
      <Categorycards/>
     
      <LatestNews/>
    

      <div className=''>
      <Footer/>
      </div>

     
    
    </div>
  );
}

export default Homepage;
