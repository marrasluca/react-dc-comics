
import logo from '../assets/dc-logo.png'
import NavBar from './NavBar';


const navLinks = [
    { id: 1, href: '#', text: 'Characters' },
    { id: 2, href: '#', text: 'Comics' },
    { id: 3, href: '#', text: 'Movies' },
    { id: 4, href: '#', text: 'TV' },
    { id: 5, href: '#', text: 'Games' },
    { id: 6, href: '#', text: 'Collectibles' },
    { id: 7, href: '#', text: 'Videos' },
    { id: 8, href: '#', text: 'Fans' },
    { id: 9, href: '#', text: 'News' },
    { id: 10, href: '#', text: 'Shop' },
]


function Header() {
    return(
        <header>
            <div className="container">
                <figure>
                    <img src={ logo } alt="logo dc" />
                </figure>
               <NavBar links={ navLinks }/> 
            
            
            </div>
        </header>
    )
}

export default Header;