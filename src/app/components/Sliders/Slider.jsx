'use client'

import { useState, useRef, useEffect } from "react";

import PageButton from "../Buttons/PageButton";
import ProductCard from "../Cards/ProductCard";

function Slider({ data }) {
    const [currentPage, setCurrentPage] = useState(0)
    const [sliderWidth, setSliderWidth] = useState(0)
    const [sliderStyle, setSliderStyle] = useState({})
    const sliderRef = useRef(null)

    useEffect(() => {
        const bodyWidth = document.body.clientWidth

        if (bodyWidth > 768) {
            setSliderStyle({ transform: `translateX(-${currentPage * sliderWidth}px)` })
        } else {
            setSliderStyle({
                transform: 'none',
                overflowX: 'scroll'
            })
        }
    }, [currentPage]);
    
    function sliderHandler(pageNumber) {
        setCurrentPage(pageNumber)
        setSliderWidth(sliderRef.current.clientWidth)
    }

    return (
        <div className="md:max-w-[1308px] max-w-[314px]">
            <div className="md:flex justify-end grow w-full mt-0.5 hidden">
                <PageButton
                    page="left"
                    data={data}
                    currentPage={currentPage}
                    sliderHandler={sliderHandler}
                />
                <PageButton
                    page="right"
                    data={data}
                    currentPage={currentPage}
                    sliderHandler={sliderHandler}
                />
            </div>
            <div className="overflow-hidden">
                <div
                    ref={sliderRef}
                    className="flex slider-gap justify-start px-3 py-5 
                                transition ease-out duration-400"
                    style={sliderStyle}
                >
                    { data.map(product => <ProductCard key={product.id} product={product} />) }
                </div>
            </div>
        </div>
    )
}

export default Slider;