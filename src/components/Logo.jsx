import LogoImage from '../assets/img/logo.png'; // Ruta absoluta a la imagen

function Logo() {
    return (
        <div className='logo'>
        <img src={LogoImage} alt='logo' />
        </div>
    );
}

export {Logo}