import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductItemDetail from "./ProductItemDetail";

function ProductItem({ product }) {
  return (
    <div
      className="p-4 md:p-6 flex flex-col items-center justify-center gap-4
                 border rounded-lg hover:scale-105 hover:shadow-xl
                 transition-transform ease-in-out duration-300 cursor-pointer"
    >
      <Image
        src={
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
          product?.attributes?.images?.data[0]?.attributes?.url
        }
        width={300}
        height={300}
        alt={product.attributes.name}
        className="h-[200px] w-[200px] object-contain rounded-lg"
      />
      <h2 className="font-bold text-xl text-center">{product.attributes.name}</h2>
      <div className="flex gap-3 text-center items-center">
        {product.attributes.sellingPrice && (
          <h2 className="font-bold text-lg text-green-600">
            ${product.attributes.sellingPrice}
          </h2>
        )}
        <h2
          className={`font-bold text-lg ${
            product.attributes.sellingPrice ? "line-through text-gray-500" : ""
          }`}
        >
          ${product.attributes.mrp}
        </h2>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="text-primary hover:text-white hover:bg-primary border-primary
                       focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          >
            View Details
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{product.attributes.name}</DialogTitle>
            <DialogDescription className="mt-2 text-gray-500">
              <ProductItemDetail product={product} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ProductItem;
