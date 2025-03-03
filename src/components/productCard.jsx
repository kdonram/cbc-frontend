export default function ProductCard(props){
    console.log(props);
    return (
        <div>
            <img src={props.img}></img>
            <h1>Product: {props.name}</h1>
            <h2>Price: {props.price}</h2>
            <button>Add to cart</button>
        </div>
    )
}