import React from "react";
import book from "../../assets/books/book-1.jpg";
import PrimaryBtn from "../../Components/PrimaryBtn";
const BooksCategory = () => {
  return (
    <section className="my-10">
      <div className="container mx-auto">
        <h4 className="text-2xl text-main font-semibold">Books</h4>
        <div className="border flex justify-between px-5 py-3 rounded-lg mt-4">
          <div className="space-x-2 flex items-center">
            <i className="bx bx-menu text-3xl cursor-pointer text-btn"></i>
            <i className="bx bx-grid-alt text-2xl cursor-pointer text-btn"></i>
          </div>
          <span className="flex text-md font-semibold items-center cursor-pointer">
            <i className="bx bx-list-ul text-3xl text-btn"></i>
            Categories
          </span>
        </div>
        {/* book card */}
        <div className="grid grid-cols-1 mt-4">
          <div className="flex md:flex-row flex-col border rounded-xl p-4 bg-white  transition hover:shadow-xl">
            <div className="sm:block sm:basis-56">
              <img
                alt="book"
                src={book}
                className="aspect-square h-full w-full object-cover rounded-lg"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <p className="text-btn">Programming</p>
                <h3 className="uppercase  text-main text-xl font-semibold mt-2">
                  Finding the right guitar for your style - 5 tips
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>

              <div className="sm:flex sm:items-end sm:justify-end space-x-3">
                <PrimaryBtn
                  classes={
                    "block bg-main px-5 py-3 text-center text-xs font-bold uppercase text-white transition rounded-md hover:bg-btn"
                  }
                >
                  Buy Now
                </PrimaryBtn>
                <div className="border hidden md:block px-3 rounded-md hover:text-red-600 cursor-pointer">
                  <i className="bx bx-heart text-3xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* book card */}
      </div>
    </section>
  );
};

export default BooksCategory;
