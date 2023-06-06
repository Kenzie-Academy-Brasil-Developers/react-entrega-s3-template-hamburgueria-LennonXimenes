import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Card from "./Card";


function SectionList() {
    const [ products, setProducts ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        async function getProducts(){
            try {
                const response = await api.get("/products");
                setProducts(response.data);
        
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false)
            }
        }
        getProducts();

    }, [])

    // if(isLoading) {
    //     return <div>Loading...</div>
    // }

    return (
        <>
            {
                isLoading ? (
                    <div>Loading..</div>
                ) : (
                    <ul>
                        {
                        products.map((product) => <Card key={product.id} product={product}>{product.name}</Card>)
                        }
                    </ul>
                )
            }
        </>
    )
}

export default SectionList;