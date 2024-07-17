import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function CartItemList({ cartItemList, onDeleteItem }) {
  return (
    <div className="h-[500px] overflow-auto px-4">
      {cartItemList.map((cart, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-4 mb-4 bg-white shadow-md rounded-lg transition-transform duration-300 hover:scale-105"
        >
          <div className="flex gap-6 items-center">
            <Image
              src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + cart.image}
              width={70}
              height={70}
              alt={cart.name}
              className="border p-2 rounded-md"
            />
            <div>
              <h2 className="font-bold text-lg">{cart.name}</h2>
              <h2 className="text-gray-600">x {cart.quantity}</h2>
              <h2 className="text-lg font-bold text-green-600">$ {cart.amount}</h2>
            </div>
          </div>
          <TrashIcon
            className="cursor-pointer text-red-600 hover:text-red-800 transition-colors duration-300"
            onClick={() => onDeleteItem(cart.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default CartItemList;
