import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    type?: 'button' | 'submit';
    handleClick? : MouseEventHandler<HTMLButtonElement>;   
}

export interface CustomFilterProps {
    title: string;
}