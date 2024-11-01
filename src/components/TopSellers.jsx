import { useState } from "react";
import BookCard from "./BookCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { useFetchAllBooksQuery } from "../redux/features/book/bookApi";

const categories = [
  "Choose a Genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];
const TopSellers = () => {
  const { data, isLoading } = useFetchAllBooksQuery();
  const [filter, setFilter] = useState("Choose a genre");
  const filteredBooks =
    filter === "Choose a genre"
      ? data
      : data.filter((book) => book.category === filter.toLowerCase());
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="py-10">
        <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
        <div className="mb-8 flex items-center">
          <select
            name="category"
            id="category"
            className="border border-gray-300 bg-[#EAEAEA] rounded-md px-4 py-3 focus:outline-none"
            onChange={(e) => setFilter(e.target.value)}
          >
            {categories.map((category, i) => (
              <option value={category} key={i}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          loop={false}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1180: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {filteredBooks?.map((book, i) => (
            <SwiperSlide key={i}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopSellers;
