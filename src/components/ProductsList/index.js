import "./index.css"
import {Component} from "react"
import ProductItem from "../ProductItem"
class ProductsList extends Component{
    state={
        productsList:[],
        isLoading:true
    }
    componentDidMount(){
        this.getProductsList()
    }
    getProductsList= async () =>{
        const response=await fetch(" https://fakestoreapi.com/products")
        const data=await response.json()
        if (response.ok===true){
            
            const fetcheddata=data.map(eachitem=>{
                return {
                    id:eachitem.id,
                    title:eachitem.title,
                    description:eachitem.description,
                    image:eachitem.image
                }
            
            })
             
            this.setState({productsList:fetcheddata,isLoading:false})
        }
        
        
    }
    renderProductsList=()=>{
        const {productsList}=this.state
        return (
            <ul className="products-container">
                {productsList.map(eachitem =>
                ( <ProductItem productdetails={eachitem} key={eachitem.id}/>)
                )
                }
            </ul>
        )
    }
    render(){
        const {isLoading}=this.state
    return (
        <div>
            {isLoading?<div>Loading</div>:this.renderProductsList()}
        </div>
    )
    }
}

export default ProductsList