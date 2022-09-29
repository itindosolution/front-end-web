import "../assets/css/AboutMe.css"
import Sangga from "../assets/image/sangga.png";
import Rizat from "../assets/image/rizat.png";
import Agung from "../assets/image/agung.png";

function AboutMe(){
    
    return(<div id="about" class="body-company-column">
                    <h2 class="aboutus">Tentang Kami</h2>
                    <p class="about-para">Kami adalah 3 Mahasiswa Universitas Bina Sarana Informatika Fakultas Teknik Informatika, yang mempunyai mimpi ingin menciptakan lapangan kerja untuk seluruh pemuda Indonesia.</p>
                    <div class="body-company">
                        <section class="company">
                            <div class="card-comp">
                                <div class="card-comp-content">
                                    <div class="comp-img">
                                        <img src={Agung} alt="ag"/>
                                    </div>
                                    <div class="name-profession">
                                        <span class="name">Agung Maulana</span>
                                        <span class="profession">UI/UX Designer</span>
                                    </div>
                                </div>
                            </div>    
                        </section>
                        <section class="company">
                            <div class="card-comp">
                                <div class="card-comp-content">
                                    <div class="comp-img">
                                        <img src={Sangga} alt="sg" />
                                    </div>
                                    <div class="name-profession">
                                        <span class="name">Sangga Yasa</span>
                                        <span class="profession">Front-End Developer</span>
                                    </div>
                                </div>
                            </div>    
                        </section>
                        <section class="company">
                            <div class="card-comp">
                                    <div class="card-comp-content">
                                        <div class="comp-img">
                                            <img src={Rizat} alt="rz" />
                                        </div>
                                        <div class="name-profession">
                                            <span class="name">Rizat Sakmir</span>
                                            <span class="profession">Back-End Developer</span>
                                        </div>
                                    </div>
                             </div>    
                        </section>
                    </div>
                </div>)
}

export default AboutMe;