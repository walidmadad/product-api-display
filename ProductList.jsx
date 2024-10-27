import {useEffect, useState} from "react";
import Product from "./Product.jx";

function ProductList() {

    const [productsList, setProductsList] = useState([]);
    const [categoriesList, setCategoriesList] = useState([]);
    const [search, setSearch] = useState("");

    const getProducts = () => {
        const products = fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setProductsList(res))
    }

    const getCategories = () => {
        const categories = fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(res => setCategoriesList(res))
    }

    const displayCategories = () => {
        return categoriesList.map((category) =>
            <button className="btn btn-secondary" value={category} onClick={handleSearchByCategory}>{category}</button>
        )
    }

    const displayProducts = () =>{

        const productsTemp =  productsList.filter( product => {
            return product.title.includes(search) ||
                product.description.includes(search) || product.category.includes(search);
        })

        return productsTemp.map((product, key) => {
                return <Product product={product} key={key}/>
            })
    }

    const handleSearchByCategory = (e) => {
        e.preventDefault()
        const searchValue = e.currentTarget.value;
        console.log(searchValue);
        setSearch(searchValue)

    }

    const handleSearch = (e) =>{
        e.preventDefault()
        const searchValue = document.querySelector("#search").value;
        setSearch(searchValue)
    }

    useEffect(() => {
        getProducts()
        getCategories()
    },[])



    return <div className="container-fluix mx-auto w-75 my-3">
        <h2>Search : </h2>
        <form>
            <div className="col-auto">
                <label className="col-form-label">Search</label>
            </div>
            <div className="col-auto">
                <input type="text" id="search" className="form-control"/>
            </div>
            <div>
                <input className='btn btn-primary' type="submit" value='Search' onClick={handleSearch}/>
            </div>
            <hr/>
            <div className="row g-3 align-items-center">

            <h5>Categories : </h5>
                <div className="btn-group">
                    {displayCategories()}
                </div>
            </div>
        </form>
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