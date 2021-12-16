import React from 'react';
import { useShopCartContext } from '../../context/cartContext';
import withProtection from '../../utils/withProtection';

const Profile = () => {
    const { handleAddItemToShopCart, handleRemoveItemFromShopCart } = useShopCartContext()

    const handleAddItem = () => {
        handleAddItemToShopCart({
            id: Math.floor(Math.random() * 100 + 1),
            name: "Producto 1",
            price: 123
        });
    }

    const handleRemoveItem = () => {
        handleRemoveItemFromShopCart(31)
    }
    return (
        <div>
            <h1>Profile......</h1>
            <button onClick={handleAddItem}>Add item</button>
            <button onClick={handleRemoveItem}>Remove item</button>
        </div>
    )
}

export default withProtection(Profile, "AMBOS");