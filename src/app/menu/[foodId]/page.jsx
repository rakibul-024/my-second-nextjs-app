import React from 'react';

const FoodDetailPage = async ({ params }) => {
    const {foodId} = await params;
    console.log(foodId);

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
       const food = data.data;

    console.log(food);
    return (
        <div className="card bg-base-100 shadow-sm p-6 m-6  items-left">
            <h2>Food id: {foodId}</h2>
            <h2>Food Name: {food.dish_name}</h2>
             <h2>Food Cuisine: {food.cuisine}</h2>
            <h2>Food Price: {food.price}</h2>
            <h2>Food Rating: {food.rating}</h2>
           
        </div>
    );
};

export default FoodDetailPage;