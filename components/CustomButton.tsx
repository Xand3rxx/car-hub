"use client";

import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types';

const CustomButton = ({title, type, containerStyles, handleClick}: CustomButtonProps) => {
  return (
    <button
    disabled={false}
    type={type || 'button'}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick} 
    >
        <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default CustomButton