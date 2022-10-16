import "../assets/css/AboutMe.css"
import Sangga from "../assets/image/sangga.png";
import Rizat from "../assets/image/rizat.png";
import Agung from "../assets/image/agung.png";

function AboutMe(){
    
    return(<div id="about" className="body-company-column">
                    <h2 className="aboutus">Tentang Kami</h2>
                    <p className="about-para">Kami adalah 3 Mahasiswa Universitas Bina Sarana Informatika Fakultas Teknik Informatika, yang mempunyai mimpi ingin menciptakan lapangan kerja untuk seluruh pemuda Indonesia.</p>
                    <div className="body-company">
                        <section className="company">
                            <div className="card-comp">
                                <div className="card-comp-content">
                                    <div className="comp-img">
                                        <img src={Agung} alt="ag"/>
                                    </div>
                                    <div className="name-profession">
                                        <span className="name">Agung Maulana</span>
                                        <span className="profession">UI/UX Designer</span>
                                    </div>
                                </div>
                            </div>    
                        </section>
                        <section className="company">
                            <div className="card-comp">
                                <div className="card-comp-content">
                                    <div className="comp-img">
                                        <img src={Sangga} alt="sg" />
                                    </div>
                                    <div className="name-profession">
                                        <span className="name">Sangga Yasa</span>
                                        <span className="profession">Front-End Developer</span>
                                    </div>
                                </div>
                            </div>    
                        </section>
                        <section className="company">
                            <div className="card-comp">
                                    <div className="card-comp-content">
                                        <div className="comp-img">
                                            <img src={Rizat} alt="rz" />
                                        </div>
                                        <div className="name-profession">
                                            <span className="name">Rizat Sakmir</span>
                                            <span className="profession">Back-End Developer</span>
                                        </div>
                                    </div>
                             </div>    
                        </section>
                    </div>
                </div>)
}

export default AboutMe;