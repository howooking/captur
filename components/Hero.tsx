interface HeroProps {
  heading: string;
  message: string;
}

export default function Hero({ heading, message }: HeroProps): JSX.Element {
  return (
    <div className="flex justify-center items-center  h-screen custom-img bg-fixed bg-center bg-cover relative">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="text-white z-10">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button type="button" className="border px-8 py-2">
          Book
        </button>
      </div>
    </div>
  );
}
