import '../css/reset.css'
import '../css/style.css'
import '../css/navbar.css'
import Logo from "../icons/logo.png"
import {signOut} from '../routes/userRoutes'

export function Navbar_logged(user_id) {

    return(
        <nav>
        <div className="navbar">
        <div className="nav-header">
            <a href="/" className="nav-logo" ><img src={Logo} className='nav-logo-img' alt="logo"/><p className="app-name">PDB Movies</p></a>
        </div>
            
            <div className="nav-links-logged nav-links-a ">
                <a href="/search" className='nav-link'>Szukaj</a>
                <a href="/favourities" className='nav-link'>Moja lista</a>
                <a href="/notifications" className='nav-link'>Powiadomienia</a>
                <a href={`/myprofile`} className='nav-link' >Mój profil</a>  
                <a onClick={async () => await signOut()} classname='nav-link' >Wyloguj się</a>
            </div>
            
        </div>
        </nav>
    );
}
export default Navbar_logged;