function Card(props){
    return (
        <section>
            <img src="./assets/gambar/cctv.jpg" alt="cctv"/>
            <h3>{props.title}</h3>
            <p class="grid-para">{props.description?props.description:'description kosong'}</p>
            {
                props.list?props.list.map((e)=><strong>{e}</strong>):'list kosong'
            }
            <strong class="net">{props.price}</strong>
            <button class="order">Order Now</button>
        </section>
    )
}
export default Card