import "./Home.css"
import { UserContext } from "../context/userContext";
import { useContext } from "react";

const Home = () => {
    const { user, logout } = useContext(UserContext);
    return <>
        <main>
            <div className="rym-title">
                <h1>{user && `Welcome ${user} to universe 137`}</h1>
                <h1>{!user && `Welcome to universe 137`}</h1>
            </div>
            <div className="rym-hero"></div>
                <div className="rym-layout">
                    <div className="rym-article">
                        <img
                            src="https://res.cloudinary.com/dpidlverd/image/upload/v1676908527/replica/rick-and-morty-beth-space-beth-romance-explained_epjal4.jpg"
                            alt="Beth1 y beth2 besandose"
                        />
                        <h1>Rick and Mortys season 6'2 most suprising scene </h1>
                        <p>
                        Towards the end of “Bethic Twinstinct,” Jerry learns that both versions of his wife are having an affair. But just when you think they’re going to get in a big fight — or possibly split up, again — Rick and Morty takes a decidedly kinky turn. Jerry takes on an uncharacteristically dominant aura of authority as he grants approval to the two Beths to engage in some sexual activity.
                        </p>
                    </div>
                    <div className="rym-article">
                            <img
                                src="https://res.cloudinary.com/dpidlverd/image/upload/v1676908689/replica/rick-morty-temporada-5-2319587_bags39.jpg"
                                alt="Rick doing surgery on his own brain while family watches with disgust"
                            />
                            <h1>Rick and Morty cuts ties with Justin Roiland </h1>
                            <p>
                            According to the complaint obtained by The Times, Roiland is facing one count of domestic battery with corporal injury and one count of false imprisonment by menace, violence, fraud and deceit.

                The complaint says the charges are related to an alleged incident that occurred on or about Jan. 19, 2020, involving an unnamed Jane Doe who was dating Roiland at that time.
                            </p>
                    </div>
            </div>
        </main>
    </>
}

export default Home;