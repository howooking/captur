import Image from 'next/image';
import { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

interface SliderProps {
  slides: {
    imageUrl: string;
  }[];
}

export default function Slider({ slides }: SliderProps): JSX.Element {
  const [curr, setCurr] = useState(0);
  const { length } = slides;
  const nextSlide = (): void => {
    setCurr(curr === length - 1 ? 0 : curr + 1);
  };
  const prevSlide = (): void => {
    setCurr(curr === 0 ? length - 1 : curr - 1);
  };

  return (
    <div id="gallery" className="max-w-5xl mx-auto">
      <h1 className="text-2xl text-center font-bold p-5 pt-[72px]">Gallery</h1>
      <div className="flex justify-center">
        {slides.map((slide, index) => (
          <div
            key={slide.imageUrl}
            className={`relative ${
              index === curr ? 'opacity-100 ease-in duration-1000' : 'opacity-0'
            }`}
          >
            <FaArrowCircleLeft
              size={50}
              className="absolute top-[50%] text-white/70 left-8 cursor-pointer select-none"
              onClick={prevSlide}
            />
            {index === curr ? (
              <div className="overflow-hidden rounded-2xl bg-slate-400 aspect-video">
                <Image
                  src={slide.imageUrl}
                  alt="imgaes"
                  width={1440}
                  height={600}
                  className="object-cover"
                />
              </div>
            ) : null}
            <FaArrowCircleRight
              size={50}
              className="absolute top-[50%] text-white/70 right-8 cursor-pointer select-none"
              onClick={nextSlide}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
