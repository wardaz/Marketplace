
import './404.css'
import lost from '../assets/other/lost.png'

export default function Error(){
    return(
        <>
        <div className="container-fluid">
        <img className='error-img' src={lost} /><br />
        <span className='oops'>Oops, looks like the page is lost.</span><br />
        <span className='not-a-fault'>This is not a fault, just an accident that was not intentional.</span>
        </div>
        </>
    )
}