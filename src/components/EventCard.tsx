import SatsangUpdateImage from "./SatsangUpdateImage";

interface EventCardProps {
  image: string;
  date: string;
  title: string;
  location: string;
  onViewClick?: () => void;
}

export default function EventCard({
  image,
  date,
  title,
  location,
  onViewClick,
}: EventCardProps) {
  return (
    <div className="bg-white overflow-hidden flex flex-col md:flex-row transition-all duration-300 relative group w-full max-w-[580px] h-auto md:h-[302px] rounded-[30px] md:rounded-[52.85px] shadow-[6px_6px_0px_0px_#005382] md:shadow-[8.81px_8.81px_0px_0px_#005382]">
      {/* Left Image Section - Using the provided SVG component */}
      {/* Left Image Section */}
      <div className="relative md:absolute top-0 left-0 w-full h-[200px] md:w-auto md:h-full flex items-center justify-center md:block overflow-hidden md:overflow-visible">
        <SatsangUpdateImage
          src={image}
          className="w-full h-full object-cover md:w-auto md:h-auto"
        />
      </div>

      {/* Right Side Container */}
      {/* Right Side Container */}
      <div className="relative md:absolute flex flex-col items-start gap-4 p-6 md:p-0 md:w-[227px] md:h-[181px] md:top-[60.5px] md:left-[326px]">
        {/* Date / Title Text */}
        {/* Date / Title Text */}
        <span className="w-full text-left font-katibeh font-normal text-[24px] leading-[24px] text-[#005382]">
          {date}
        </span>

        {/* Description Text */}
        {/* Description Text */}
        <p className="line-clamp-3 text-left w-full font-outfit font-normal text-[18px] leading-[24px] tracking-[0.015em] text-[#57534E] m-0">
          {title} | {location}
        </p>

        {/* View More Button */}
        {/* View More Button */}
        <button
          onClick={onViewClick}
          className="flex items-center justify-center text-white transition-all active:scale-95 w-[94px] h-[40px] rounded-[8px] bg-[#F34743] px-[30px] py-[8px] text-[16px] font-bold border-none cursor-pointer"
        >
          View
        </button>
      </div>
    </div>
  );
}
