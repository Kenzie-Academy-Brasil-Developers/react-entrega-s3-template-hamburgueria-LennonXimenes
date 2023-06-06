import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Card from "./Card";


function SectionList() {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        async function getProducts(){
            const response = await api.get("/products");
            setProducts(response.data);
        }
        getProducts();
    }, [])

    console.log();

    return (
        <ul>
            {
            products.map((product) => <Card key={product.id} product={product}>{product.name}</Card>)
            }
        </ul>
    
    )

}

export default SectionList;