import React, { ChangeEvent, FC, useCallback, useEffect, useState, useRef } from 'react';
import './css/multiRangeSlider.css';

interface MultiRangeSliderProps {
  minPrice: number;
  maxPrice: number;
  setMinPrice: any;
  setMaxPrice: any;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({ minPrice, maxPrice,setMinPrice,setMaxPrice  }) => {
  const [minVal, setMinVal] = useState(minPrice);
  const [maxVal, setMaxVal] = useState(maxPrice);
  const minValRef = useRef(minPrice);
  const maxValRef = useRef(maxPrice);
  const range = useRef<HTMLDivElement>(null); 

  // Convert to percentage
  const getPercent = useCallback((value: number) =>
    Math.round(((value - minPrice) / (maxPrice - minPrice)) * 100), [minPrice, maxPrice])

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
      setMinPrice(minVal);
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
      setMaxPrice(maxVal);
    }
  }, [maxVal, getPercent]);

  return (
    <div className="container">
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={minVal}
          step={1000}
          onChange={(event: ChangeEvent<HTMLInputElement>) => { 
            const value = Math.min(Number(event.target.value), maxVal - 1000);
            setMinVal(value);
            minValRef.current = value;
          }}
          className="thumb thumb--left"
          // style={{ zIndex: minVal > max - 100 && "5" }}
        />
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={maxVal}
          step={1000}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {  
            const value = Math.max(Number(event.target.value), minVal + 1000);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className="thumb thumb--right"
        />

        <div className="slider">
          <div className="slider__track"></div>
          <div ref={range} className="slider__range"></div>
          <div className="slider__left-value">{minPrice}원</div>
          <div className="slider__right-value">{maxPrice}원</div>
        </div>
      </div>
  );
};

export default MultiRangeSlider;
