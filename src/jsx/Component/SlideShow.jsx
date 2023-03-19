import { slideShowImages } from "../Helper/Constants";
import { useState, useEffect } from "react";

    const SlideShow = () => {
        const [slides, setSlides] = useState(slideShowImages);
        const [numSlides, setNumSlides] = useState(0);
        const [currentIndex, setCurrentIndex] = useState(0);
        const [prevIndex, setPrevIndex] = useState(0);
        const [nextIndex, setNextIndex] = useState(1);
      
        useEffect(() => {
            setSlides(slideShowImages);
            setNumSlides(slideShowImages.length);
            setPrevIndex(slideShowImages.length - 1);
        }, [slideShowImages]);

        // Use useEffect hook to advance the slide index automatically at a specified 
        useEffect(() => {
            // Set interval for automatic slideshow
            const interval = setInterval(() => {
                // Increment index
                const newIndex = (currentIndex + 1) % numSlides;
                setCurrentIndex(newIndex);
                setPrevIndex(newIndex - 1 < 0 ? slides.length - 1 : newIndex - 1);
                setNextIndex(newIndex + 1 >= slides.length ? 0 : newIndex + 1);
            }, 3000); // Change interval to desired time in milliseconds

            // Clear interval when component unmounts
            return () => clearInterval(interval);
        }, [currentIndex, numSlides]);

        return (

            <div className="slideshow">
                <div className="slide prev">
                    <img src={slides[prevIndex].Url} alt={slides[prevIndex].Id} />
                </div>
                <div className="slide current">
                    <img src={slides[currentIndex].Url} alt={slides[currentIndex].Id} />
                </div>
                <div className="slide next">
                    <img src={slides[nextIndex].Url} alt={slides[nextIndex].Id} />
                </div>
            </div>
        );
    }
export default SlideShow;