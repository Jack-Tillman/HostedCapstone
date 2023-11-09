import { Button, NavItem } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { useContext } from 'react'


export function CartProduct(props) {
    const cart = useContext(CartContext);
    const stripe_id = props.stripe_id;
    const price = props.price;
    const quantity = props.quantity;
    const productData = cart.getProductData(stripe_id);


    return (     
        <>
            <h3>{productData.productname}</h3>
            <p>{quantity} total</p>
            {/* <p>${ quantity * price.toFixed(2) }</p> */}
            <Button size="sm" onClick={() => cart.deleteFromCart(stripe_id)}>Remove</Button>
            <hr />
        </>    
    )
}