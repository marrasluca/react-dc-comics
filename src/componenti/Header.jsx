// const NavLinks = [
//     { id: 1, href: '#', text: 'Characters' },
//     { id: 2, href: '#', text: 'Comics' },
//     { id: 3, href: '#', text: 'Movies' },
//     { id: 4, href: '#', text: 'TV' },
//     { id: 5, href: '#', text: 'Games' },
//     { id: 6, href: '#', text: 'Collectibles' },
//     { id: 7, href: '#', text: 'Videos' },
//     { id: 8, href: '#', text: 'Fans' },
//     { id: 9, href: '#', text: 'News' },
//     { id: 10, href: '#', text: 'Shop' },
//   ]

function Header() {
    return(
        <header>
            <div className="container">
                <figure>
                    <img src="../src/assets/dc-logo.png" alt="logo dc" />
                </figure>
            
            <nav>
                <ul>
                    <li><a href="#">CHARECTERS</a></li>
                    <li className="active"><a href="#">COMICS</a></li>
                    <li><a href="#">MOVIES</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">GAMES</a></li>
                    <li><a href="#">COLLECTIBLES</a></li>
                    <li><a href="#">VIDEOS</a></li>
                    <li><a href="#">FANS</a></li>
                    <li><a href="#">NEWS</a></li>
                    <li><a href="#">SHOP</a></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header;