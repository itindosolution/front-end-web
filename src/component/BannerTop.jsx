import bannerTop from "../assets/image/bannerTop.png"
import "../assets/css/BannerTop.css";

function BannerTop(){
    return(<div id="home" className="flex-container-home">
        <div className="flex-container-home-column">
            <h1 id="home">IT INDO <br/>Solution</h1>
            <div>
            <p>IT Indo Solution merupakan penyedia layanan jasa yang bergerak dibidang Teknologi Informasi,
            menyediakan barang dan jasa konsultasi dalam dunia komputerisasi
            seperti software, hardware, jaringan dan lain-lain.</p>
            <a href="/" className="read-link">Baca Lebih Lengkap</a>
            </div>
        </div>
        <img src={bannerTop} alt="hand" />
    </div>)
}

export default BannerTop