import { NavBar } from "./components/NavBar";
import { ProfileCard } from "./components/ProfileCard";
import { Footer } from "./components/Footer";

export function App() {
    return (
        <div>
            <NavBar />
            <ProfileCard name="Caleb" age="19" favIceCreamFlavor="Green Tea"/>
            <Footer />
        </div>
    )
}