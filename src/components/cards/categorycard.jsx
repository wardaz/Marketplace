import './categorycards.css'
import Card from 'react-bootstrap/Card';

export default function Categorycards() {
    return (
        <>
                <h4 className='popular-categories'>Popular Categories</h4>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-6 col-6 col-2">
                        
                            <a href='#' className='catcards'>
                            <i class="fa fa-image"></i>
                            <span>Art</span>
                            </a>
                        
                    </div>

                    <div className="col-md-2 col-sm-6 col-6 col-2">
                        
                            <a href='#' className='catcards'>
                            <i class="fa fa-music"></i>
                            <span>Music</span>
                            </a>
                        
                    </div>

                    <div className="col-md-2 col-sm-6 col-6 col-2">
                        
                            <a href='#' className='catcards'>
                            <i class="fa fa-search"></i>
                            <span>Domain Names</span>
                            </a>
                        
                    </div>

                    <div className="col-md-2 col-sm-6 col-6 col-2">
                        
                            <a href='#' className='catcards'>
                            <i class="fa fa-globe"></i>
                            <span>Virtual Worlds</span>
                            </a>
                        
                    </div>

                    <div className="col-md-2 col-sm-6 col-6 col-2">
                        
                            <a href='#' className='catcards'>
                            <i class="fa fa-vcard"></i>
                            <span>Training Cards</span>
                            </a>
                        
                    </div>

                    <div className="col-md-2 col-sm-6 col-6 col-2">
                        
                            <a href='#' className='catcards'>
                            <i class="fa fa-th"></i>
                            <span>More Categories</span>
                            </a>
                        
                    </div>

                </div>
            </div>
        </>
    );
}