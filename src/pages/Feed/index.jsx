import { useEffect, useState } from "react";

import { api } from "../../services/api";

import Card from "../../components/Card";
import Header from "../../components/Header";

function Feed() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");


    useEffect(() => {
        async function getProducts() {
            try {
                const response = await api.get("/products", {
                    params: {
                        name_like: search
                    }
                });
                setProducts(response.data);

            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        getProducts();

    }, [search])

    function handleForm(inputSearch) {
        setSearch(inputSearch);
    }

    return (
        <>
            <Header callback={handleForm}/>

            {
                isLoading ? (
                    <div>Loading...</div>
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

export default Feed;