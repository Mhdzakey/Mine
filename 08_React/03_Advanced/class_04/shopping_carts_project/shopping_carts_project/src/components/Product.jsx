import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const AddToCart = () => {
    dispatch(add(post));
  };
  const removeFromCart = () => {
    dispatch(remove(item.id));
  };

  return (
    <div
      className="flex flex-col justify-between bg-blue-200
    hover:scale-110 transition duration-200 ease-in gap-3 p-4 mt-10 
    outline ml-5 rounded-xl "
    >
      Cart
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <p
          className="w-40 to-gray-400 font-normal text-[10px] 
        text-left"
        >
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={`${post.image}`} className="w-full h-full" />
      </div>
      <div className="flex justify-between gap-12">
        <div>
          <p className="text-green-600 justify-between gap-12 items-center w-full mt5">
            ${post.price}
          </p>
        </div>
        <button
          className="text-gray-700 border-2 border-gray-700 rounded-full
        font-semibold text-[12px] p-1 px-3 uppercase
        hover:bg-gray-700 hover:text-white transition duration-200 ease-in"
        >
          {cart.some((p) => p.id == post.id) ? (
            <button onClick={AddToCart}>Remove Item</button>
          ) : (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full
        font-semibold text-[12px] p-1 px-3 uppercase
        hover:bg-gray-700 hover:text-white transition duration-200 ease-in"
              onClick={removeFromCart}
            >
              Add to Cart
            </button>
          )}
        </button>
      </div>
    </div>
  );
};

export default Product;
