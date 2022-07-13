import "../assets/css/ContactMe.css"

function ContactMe(){               
    
    return (<div id="contact" className="form-contact">
                <h2 className="contact">Hubungi Kami</h2>
                <div className="form-group">
                    <form action="#" method="POST">
                            <input type="text" name="nama" placeholder="Nama Lengkap"  style={{width:"95%"}} />
                                <input type="email" name="email" placeholder="Email" className="input" />
                                <input type="number" name="number" placeholder="Nomor Telepon" />
                            <textarea cols="40" rows="5" name="pesan" id="pesan" placeholder="Masukan Pesan"></textarea>
                            <input type="submit" value="Kirim" className="tombol"/>
                        
                    </form>
                </div>
            </div>)

}

export default ContactMe;