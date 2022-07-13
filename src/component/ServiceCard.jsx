
import Card from "./child/Card"
import React,{useState, useEffect} from "react"
import Api from "../data/Api"
import "../assets/css/ServiceCard.css"

function ServiceCard(){
    const [listPackage, setListPackage] = useState([]);

    useEffect(() => {
        async function ListPackage(){
            const ListPackage = (await Api.getAll({route:'package/service'})).data.packageService;
            setListPackage(ListPackage);
        }

        ListPackage();
    }, []);
    return (<article id="service" className="product-body">
                    <h2 className="product">Paket Layanan</h2>
                    <div className="grid">
                        {
                            listPackage.map((list)=><Card list={list} key={list.package_service_id}></Card>)
                        }
                    </div>
                </article>)

}

export default ServiceCard