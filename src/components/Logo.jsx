import LogoImage from '../assets/img/logo.png';

function Logo() {
    return (
        <div className='logo'>
        <img src={LogoImage} alt='logo' />
        </div>
    );
}

export {Logo}