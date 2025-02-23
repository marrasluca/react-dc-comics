const NavBar = (props) => {


    const arrayLInks = props.links

    

    return (
        <nav>
                <ul>
                    {
                        arrayLInks.map( (link) => {
                            const { id, href, text} = link;

                            return (
                                <li key={ link.id }>
                                    <a href={ href }>
                                        { text }
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
    )
}

export default NavBar;