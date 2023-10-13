import { useState } from "react";

export const handleHeartClick = (isHeartFilled, setIsHeartFilled) => {
    setIsHeartFilled(!isHeartFilled);
  };
  
  export const handleTrashClick = (isVisible, setIsVisible) => {
    setIsVisible(!isVisible);
  };
  
  export const Services = () => {
    const [isHeartFilled, setIsHeartFilled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
  
    return { isHeartFilled, setIsHeartFilled, isVisible, setIsVisible };
  };