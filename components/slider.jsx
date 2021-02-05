import React, { useState } from 'react';
import ImageSlide from './imageSlide.jsx';

let sliderArray = ["https://s3.amazonaws.com/dev.itjet/test_task/1.jpg",
    "https://s3.amazonaws.com/dev.itjet/test_task/2.jpg",
    "https://s3.amazonaws.com/dev.itjet/test_task/3.jpg",
    "https://s3.amazonaws.com/dev.itjet/test_task/4.jpg",
    "https://s3.amazonaws.com/dev.itjet/test_task/5.jpg",
    "https://s3.amazonaws.com/dev.itjet/test_task/6.jpg",
    "https://s3.amazonaws.com/dev.itjet/test_task/7.jpg"];

function Slider() {
    const [x, setX] = useState(0);
    const [activeIndex, setState] = useState(0);
    const [counter] = useState(0); // to enable/disable automatic switching: (1) - automatic switching, (0) - switching by buttons

    const switchLeft = () => {
        if (x === 0) {
            setX(-100 * (sliderArray.length - 1));
            setState(sliderArray.length - 1);
        } else {
            setX(x + 100);
            setState(activeIndex - 1);
        }
    };

    const switchRight = () => {
        if (x === -100 * (sliderArray.length - 1)) {
            setX(0);
            setState(0);
        } else {
            setX(x - 100);
            setState(activeIndex + 1);
        }
    };

    if (counter) {
        setTimeout(() => {
            if (x === -100 * (sliderArray.length - 1)) {
                setX(0);
                setState(0);
            } else {
                setX(x - 100);
                setState(activeIndex + 1);
            }
        }, 3000);
    }

    function handleClick(event) {
        const index = parseInt(event.target.id);
        return (
            setX(index * (-100)),
            setState(index)
        )
    }

    function Dot({ active, id }) {
        return <button className="dot-item" style={{ background: active ? 'white' : 'none' }} id={id} onClick={handleClick}></button>
    }

    return (
        <div className="slider">{
            sliderArray.map((item, index) => {
                return (
                    <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
                        <ImageSlide src={item} />
                    </div>
                )
            })
        }
            {!counter && (
                <>
                    <button id="left" onClick={switchLeft}>
                        <i class="fas fa-angle-left fa-4x" style={{ color: `lightgray` }}></i>
                    </button>
                    <button id="right" onClick={switchRight}>
                        <i class="fas fa-angle-right fa-4x" style={{ color: `lightgray` }}></i>
                    </button>
                    <div className="dots-list">
                        {sliderArray.map((item, index) => (
                            <Dot key={item} active={activeIndex === index} id={index} />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Slider;