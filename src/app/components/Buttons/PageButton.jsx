'use client'

import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function PageButton({ page, data, currentPage, sliderHandler }) {
    const [iconStyle, setIconStyle] = useState({
        height: '22px',
        filter: 'drop-shadow(0px 0px 6px #00000029)'
    })


    function pageHandler() {
        if (page === 'left') {
            if (currentPage === 0) {
                sliderHandler(data.length / 4 - 1)
            } else {
                sliderHandler(currentPage - 1)
            }
        } else {
            if (currentPage === data.length / 4 - 1) {
                sliderHandler(0)
            } else {
                sliderHandler(currentPage + 1)
            }
        }
    }

    function mouseEnterHandler() {
        setIconStyle({
            height: '22px',
            color: '#ffffff',
        })
    }

    function mouseLeaveHandler() {
        setIconStyle({
            height: '22px',
            filter: 'drop-shadow(0px 0px 6px #00000029)'
        })
    }

    return (
        <button
            className="mr-3.5 w-11 h-11 flex justify-center items-center shadow-sm hover:bg-black transition-all"
            onClick={pageHandler}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <FontAwesomeIcon
                icon={page === 'left' ? faChevronLeft : faChevronRight}
                style={iconStyle}
            />
        </button>
    )
}

export default PageButton