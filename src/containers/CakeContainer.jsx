import Purchase from "../components/Purchase"
import { useState } from "react"

const CakeContainer = () => {

    const [totalRevenue, setTotalRevenue] = useState(0)


    return (
        <>
            <h2>Cakes:</h2>
            <h3>Average rating: {Math.round((5+5+3)/3 * 10) / 10 + "★"}</h3>
            <div class="cake-container">
                <div class="cake">
                <Purchase cakeName={"Victoria Sponge"}
                    ingredients={["eggs","butter","sugar","self-raising flour","baking powder","milk"]} 
                    price = {5}
                    rating = {5}
                    totalRevenue = {totalRevenue}
                    onButtonClick={setTotalRevenue}/>
                </div>
                <div class="cake">  
                <Purchase cakeName={"Tea Cake"}
                    ingredients = {["eggs","oil","dried fruit","sugar","self-raising flour","strong tea"]}
                    price = {2}
                    rating = {3}
                    totalRevenue = {totalRevenue} 
                    onButtonClick={setTotalRevenue}/>
                </div>  
                <div class="cake">
                <Purchase cakeName={"Carrot Cake"} 
                    ingredients = {["carrots","walnuts","oil","cream cheese","flour","sugar"]}
                    price = {8}
                    rating = {5}
                    totalRevenue = {totalRevenue}
                    onButtonClick={setTotalRevenue}/>
                </div>    
            </div>    
            <h3>Total sales: £{totalRevenue}</h3>
        </>
    )
}

export default CakeContainer