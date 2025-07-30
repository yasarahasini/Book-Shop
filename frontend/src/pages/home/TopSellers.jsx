import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const categories=["Choose a genre","Business", "fiction","Horror","Adventure"]
const TopSeller = () => {

   
    const [selectedCategory, setSelectedCategory]=useState("choose a genre");
    const{data: books = []} = useFetchAllBooksQuery()
   
   
    const filteredBooks=selectedCategory=== "choose a genre"? books: books.filter(book=>
      book.category ===selectedCategory.toLowerCase()) 
    
    
    return (
      <>
         <div className='py-10'>
            <h2 className='text-3xl font-semibold mb-6'>Top Seller</h2>
            {/*category filters go here*/}
            <div className='mb-8 flex-semibold item-center'>
              
              <select 
              onChange={(e)=>setSelectedCategory(e.target.value)}
              name="category" id="category" className='border bg-[#EAEAEA] border-gray-300 
              rounded-md px-2 py-1 focus:outline-none'>
                {
                  categories.map((category, index) =>(
                    <option key={index} value={category}>{category}</option>
                  ))
                }
              </select>
            </div>

            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        
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
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180:{
            slidesPerView:3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
             filteredBooks.length>0 && filteredBooks.map((book,index)=>(
                <SwiperSlide key={index}>
                  <BookCard key={index} book={book}/>
                </SwiperSlide>

                
              ))
            }
        

            </Swiper>
            
         </div>
      </>
    )
  }
  
  export default TopSeller