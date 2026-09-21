import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FoodCard = ({ food }) => {
  const { dish_name, category, image_link, id ,cuisine} = food ;

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image
          height={400}
          width={400}
          src={image_link}
          alt="Food image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{dish_name}</h2>
        <p>{category}</p>
        <div className="card-actions justify-end">
         <Link href={`/menu/${id}`}>
          <button className="btn btn-primary">Order Now</button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;