const Purchase = ({cakeName, ingredients, price, rating, totalRevenue, onButtonClick}) => {

    const handlePurchase = () => {
        console.log("purchased " + {cakeName} + " for £" + {price});
        onButtonClick(totalRevenue + price)
    }

    return (
        <>
            <h3>{cakeName}</h3>
            <p>Ingredients:</p>
            <ul>
                {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <p>Price: £{price}</p>
            <p>Rating: {"★".repeat(rating) + "☆".repeat(5-rating)}</p>
            <button onClick={handlePurchase}>Buy {cakeName}</button>
        </>
    )

}

export default Purchase