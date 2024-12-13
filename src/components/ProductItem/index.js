import "./index.css"

const ProductItem=(props)=>{
    const {productdetails}=props
    const {title,description,image,id}=productdetails
    return (
        <li className="product">
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={image} className="image"/>
        </li>
    )
}
export default ProductItem

