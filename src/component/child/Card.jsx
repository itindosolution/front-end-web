function Card(props){
    return (
        <section>
            <img src="./assets/gambar/cctv.jpg" alt="cctv"/>
            <h3>{props.list.name}</h3>
            <p className="grid-para">{props.list.description?props.list.description:'description kosong'}</p>
            {
                props.list.products?props.list.products.map((e)=><strong key={e}>{e}<br/></strong>):'list kosong'
            }
            <strong className="net">{props.list.price}</strong>
            <button className="order">Order Now</button>
        </section>
    )
}
export default Card