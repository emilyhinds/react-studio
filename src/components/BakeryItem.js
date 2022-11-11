// TODO: create a component that displays a single bakery item
import addToCart from "../App.js"

export default function BakeryItem (item) {
    return (
        <div class="bakery-item">
            <img src={item.image}></img>
            <div class="item-info">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </div>
            <div class="bottom-bar">
                <p>${item.price}</p>
            </div>
        </div>
    );
}