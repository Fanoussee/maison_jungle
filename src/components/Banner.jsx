import '../styles/banner.css';
import logo from '../assets/logo.png';
import Recommendation from './Recommendation';

function Banner () {
    const title = 'La Maison Jungle';

    return (
        <div className='lmj-banner'>
            <div className='lmj-banner-logo'>
                <img src={ logo } alt="La maison jungle" className='lmj-logo' />
                <h1 className='lmj-title'>{ title }</h1>
            </div>
            <Recommendation />
        </div>
    );
};

export default Banner;