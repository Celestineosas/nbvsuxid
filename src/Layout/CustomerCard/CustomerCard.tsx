
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerCard = () => {
  const settings = {
    dots: true,          // Hide dots
    arrows: false,        // Hide arrows
    infinite: false,      // Disable loop
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <Slider {...settings}>
        <div className="flex lg:flex-row flex-col justify-between bg-gray-100 p-6 rounded-lg">
          <div className="text-lg font-semibold">First text</div>
          <div className="text-lg font-semibold">Second text</div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between bg-gray-100 p-6 rounded-lg">
          <div className="text-lg font-semibold">Third text</div>
          <div className="text-lg font-semibold">Fourth text</div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between bg-gray-100 p-6 rounded-lg">
          <div className="text-lg font-semibold">Fifth text</div>
          <div className="text-lg font-semibold">Sixth text</div>
        </div>
      </Slider>
    </div>
  );
};

export default CustomerCard;
