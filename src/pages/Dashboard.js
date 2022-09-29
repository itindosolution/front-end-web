import Navigation from "../component/Navigation";
import BannerTop from "../component/BannerTop";
import ServiceCard from "../component/ServiceCard";
import ContactMe from "../component/ContactMe";
import AboutMe from "../component/AboutMe";

function Dashboard(){
    return (
        <div>
            <Navigation></Navigation>
            <BannerTop></BannerTop>
            <ServiceCard></ServiceCard>
            <ContactMe></ContactMe>
            <AboutMe></AboutMe>
        </div> 
    )
}

export default Dashboard;