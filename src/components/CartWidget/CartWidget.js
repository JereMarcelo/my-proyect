import cart from './assets/carrito.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div  id="carrito">
            <img id ="cartImg" src={cart} alt='cart'/>
        </div>
    )
}

export default CartWidget