"use client"

import Sidebar from "../components/sidebar";
import { faGalacticRepublic } from "@fortawesome/free-brands-svg-icons";
import { faGasPump } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdPeopleOutline } from "react-icons/md";
import LikeButton from "../components/LikeButton";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../components/ui/card";
import Image from 'next/image';
import { useWishlist } from "../context/WishlistContext";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useState, useEffect } from "react";
import BookingForm from "../components/pick&drops";
import React from "react";
 function Morecares() { 
  const [data, setdata] = useState<Car[]>([]);
      useEffect(() => {
        const fetchCars = async () => {
          const response = await fetch("https://678cc7fcf067bf9e24e83478.mockapi.io/carrental");
          const data = await response.json();
          setdata(data);  // Set the fetched data to state
        };
    
        fetchCars();
      }, []);
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  // Filter the cars based on seating capacity being between 3 and 5
  const filteredData = data.filter((car: Car) => {
    const seatingCapacity = parseInt(car.seating_capacity);
    return seatingCapacity > 3 && seatingCapacity < 5; // Only include cars with seating capacity between 3 and 5
  });

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="w-[2%] md:w-[200px] sm:w-[2%] h-full bg-white border-r border-gray-300">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-8 bg-gray-100">
      <BookingForm/>
      
        <div className="flex">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {filteredData.length > 0 ? (
              filteredData.map((car: Car) => (
                <Card key={car.id} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle className="w-full flex items-center justify-between">
                      {car.name}
                      <button
                    onClick={() =>
                      wishlist.includes(car.id)
                        ? removeFromWishlist(car.id)
                        : addToWishlist(car.id)
                    }
                    className="relative z-10 p-1 rounded-full bg-white"
                  >
                    {wishlist.includes(car.id) ? (
                      <FaHeart size={20} className="text-red-500" />
                    ) : (
                      <FaRegHeart size={20} className="text-gray-500" />
                    )}
                  </button>
                  
                      <LikeButton />
                    </CardTitle>
                    <CardDescription>{car.type}</CardDescription>
                  </CardHeader>
                  <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                    <Image 
                      src={car.image_url} 
                      alt={car.name} 
                      width={220} 
                      height={68} 
                      className="object-cover" 
                    />
                    <div className="flex items-center space-x-1">
                      <FontAwesomeIcon icon={faGasPump} className="text-gray-400" style={{ width: '20px', height: '20px' }} />
                      <span className="text-sm">{car.fuel_capacity}</span>
                      <FontAwesomeIcon icon={faGalacticRepublic} className="text-gray-400" style={{ width: '20px', height: '20px' }} />
                      <span className="text-sm">{car.transmission}</span>
                      <MdPeopleOutline size={30} className="text-gray-400" />
                      <span className="text-sm flex">{car.seating_capacity}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="w-full flex items-center justify-between">
                    <p>
                      {car.price_per_day}/<span className="text-gray-500">day</span>
                    </p>
                    <button className="bg-[#3563e9] p-2 text-white rounded-md">
                      <a href={`/morecars/id?id=${car.id}`}>Rent Now</a>
                    </button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <p className="text-center text-gray-500">No cars available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Morecares;

type Car = {
  id: number;
  name: string;
  type: string;
  fuel_capacity: string;
  transmission: string;
  seating_capacity: string;
  price_per_day: string;
  image_url: string;
  tags: string[];
};