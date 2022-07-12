import Logo from "../assets/image/logo.png";
import "../assets/css/Navigation.css";

function Navigation(){
    return (<header>
                <div className="flex-container-head">
                    <img src={Logo} alt="logo" style={{float: "left", height: "75px",margin: "10px 0px 0px 40px"}} />
                    <span className="font-logo">Solution your tech problem.</span>
                    <nav>
                        <ul>
                            <li><a href="#home">Beranda</a></li>
                            <li><a href="#service">Layanan</a></li>
                            <li><a href="#about">Tentang Kami</a></li>
                            <li><a href="#contact">Kontak</a></li>
                        </ul>
                    </nav>
                </div>
            </header>)
}

export default Navigation;