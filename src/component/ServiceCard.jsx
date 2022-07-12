
import Card from "./child/card"
import React,{useState, useEffect} from "react"

function ServiceCard(){
    const [listPaket, setListPaket] = useState([]);

    useEffect(() => {
        async function ListPaket(){
            
        }

        ListPaket();
    }, []);
    return (<article id="service" class="product-body">
                    <h2 class="product">Paket Layanan</h2>
                    <div class="grid">
                        {
                            listPaket.map((list)=><Card list={list}></Card>)
                        }
                    </div>
                </article>)

}

export default ServiceCard