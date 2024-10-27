import Rating from "./Rating";

function Product({product}) {
    return <tr>
        <td>{product.id}</td>
        <td>{product.title}</td>
        <td>{product.description}</td>
        <td>{product.category}</td>
        <td><img width={150} src={product.image} alt=""/></td>
        <td>{product.price}€</td>
        <td><Rating rate={product.rating.rate} count={product.rating.count}/></td>
    </tr>

}

export default Product;