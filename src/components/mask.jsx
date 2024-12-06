import podlogo from '../../starter-code/assets/mobile/Combined Shape.png';
import apple from '../../starter-code/assets/desktop/apple-podcast.svg';
import google from '../../starter-code/assets/desktop/google-podcasts.svg';
import spotify from '../../starter-code/assets/desktop/spotify.svg';
import pocketCasts from '../../starter-code/assets/desktop/pocket-casts.svg';
import Form from './form';


function Mask() {
    return <div className='outer'>
        <div className='inner'>
          <section className='logo-section'>
            <div className='logo-div'>
              <div className='img-div'><img src={podlogo} alt="logo" /></div>              
              <p>pod</p>
            </div>
          </section>
          <section>
            <div className='textBox'>
              <h3 className='publish'><span>PUBLISH YOUR<br/> PODCASTS</span><br/> EVERYWHERE</h3>
              
              <p className='upload'>Upload your audio to Pod with a single click.<br/> We’ll then distribute your podcast to Spotify,<br /> 
              Apple Podcasts, Google Podcasts, Pocket <br /> Casts and more!</p>
            </div>
          </section>
          <section className='social-logo-section'>
            <div className='social-logo'>
              <div className='spotify'><img src= {spotify} alt='spotify logo' /></div>
              <div className='apple'><img src= {apple} alt='apple logo' /></div>
              <div className='google'><img src= {google} alt='google logo' /></div>
              <div className='pocketCasts'><img src= {pocketCasts} alt='pocket-casts logo' /></div>
            </div>
          </section>
          <section className='form'>
             <Form/>
          </section>
        </div>
      </div>
}


export default Mask;