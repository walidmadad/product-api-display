import {useEffect, useState} from "react";
import Product from "./Product.jx";

function ProductList() {

    const [productsList, setProductsList] = useState([]);

    const getProducts = () => {
        const products = fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setProductsList(res))
    }

    const displayProducts = () =>{
        return productsList.map((product, key) => {
                return <Product product={product} key={key}/>
            })
    }

    useEffect(() => {
        console.log(productsList)
        getProducts()
    },[])



    return <div className="container-fluix mx-auto w-75 my-3">
        <h1>Liste des produits</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Titre</th>
                    <th>Description</th>
                    <th>Categorie</th>
                    <th>Image</th>
                    <th>Prix</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>
            {displayProducts()}
            </tbody>
        </table>
    </div>
}

export default ProductList;