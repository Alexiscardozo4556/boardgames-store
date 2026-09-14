import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
return (
    <div className="cart">
    <FaShoppingCart size={20} />
    <span>3</span>
    </div>
);
}

export default CartWidget;

