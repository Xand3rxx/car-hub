"use client";

import { useState } from "react";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import { CustomButton } from "@/components";
import CarDetails from "./CarDetails";
import { generateCarImageUrl } from "@/utils";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {" "}
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 font-extrabold text-[32px]">
        <span className="self-start font-semibold text-[14px]">₦</span>
        {carRent}
        <span className="self-end font-medium text-[14px]">/day</span>
      </p>

      <div className="relative object-contain w-full h-40 my-3">
        <Image
          src={generateCarImageUrl(car)}
          alt={model}
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex justify-between w-full group-hover:invisible text-gray">
          <div className="flex flex-col justify-center gap-2 item-center">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="Steering wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className="flex flex-col justify-center gap-2 item-center">
            <Image src="/tyre.svg" width={20} height={20} alt="Tyre" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center gap-2 item-center">
            <Image
              src="/gas.svg"
              width={20}
              height={20}
              alt="Miles per gallon"
            />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails isOpen={isOpen} car={car} closeModal={() => setIsOpen(false)}/>
    </div>
  );
};

export default CarCard;
