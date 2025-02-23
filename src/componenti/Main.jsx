import comics from "../assets/buy-comics-digital-comics.png";
import merch from "../assets/buy-comics-merchandise.png";
import shop from "../assets/buy-comics-shop-locator.png";
import sub from "../assets/buy-comics-subscriptions.png";
import buy from "../assets/buy-dc-power-visa.svg";


import ComicsList from "./ComicsList"

function Main() {
    return(
        <main>
            <section id="content">
                <div id="jumbotrone">


                </div>
                <div className="container">

                    {/* <h2>-- content goes here --</h2> */}
                    <div>
                    <ComicsList />
                    </div>
                </div>
            </section>


            <section id="information">
                <div className="container">
                    <ul>
                        <li>
                            <figure>
                                <img src={comics} alt="" />
                            </figure>
                            <span>DIGITAL COMICS</span>
                        </li>
                        <li>
                        <figure>
                                <img src={merch} alt="" />
                            </figure>
                            <span>DC MERCHANDISE</span>
                            </li>
                        <li>
                        <figure>
                                <img src={sub} alt="" />
                            </figure>
                            <span>SUBSCRIPTIONS</span>
                            </li>
                        <li>
                        <figure>
                                <img src={shop} alt="" />
                            </figure>
                            <span>COMIC SHOP LOCATOR</span>
                            </li>
                        <li>
                        <figure>
                                <img src={buy} alt="" />
                            </figure>
                            <span>DC POWER VISA</span></li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Main;