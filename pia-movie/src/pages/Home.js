import React from "react";

import Navbar from "../components/Navbar/Navbar";
import ImageSlider from "../components/ImageSlider";//<ImageSlider slides={SliderData}/> aaaaaaaaaaaaaaaaaaaaaaaaaa
import { SliderData } from "../components/SliderData";



export default function Home(){
    return(
        <div>
        <Navbar/>
        <ImageSlider slides={SliderData}/>  
      
        
        
        
        HOME PERRA!!!
        </div>
    )
}