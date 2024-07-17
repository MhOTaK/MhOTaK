import React from "react";
import Image from "next/image";
import Link from "next/link";

function CategoryList({ categoryList }) {
  return (
    <div className="mt-10 px-4">
      <h2 className="text-green-600 font-bold text-3xl text-center mb-6">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6">
        {categoryList.map((category, index) => (
          <Link
            key={index}
            href={"/products-category/" + category.attributes.name}
            className="flex flex-col items-center bg-green-50 gap-2 p-4 rounded-lg group cursor-pointer hover:bg-green-200 transition-all ease-in-out"
          >
            <Image
              src={
                process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                category?.attributes?.icon?.data[0]?.attributes?.url
              }
              width={60}
              height={60}
              alt="icon"
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <h2 className="text-green-800 font-semibold text-center">
              {category?.attributes?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
