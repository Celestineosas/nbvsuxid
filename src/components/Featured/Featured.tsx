import { featured } from "../../constants"
import FeaturedCard from "../../Layout/FetauredCard/FeaturedCard"

const Featured = () => {
  return (
    <section className="padding max-container w-full flex flex-col gap-10 mt-10 items-center justify-center">
      {/* Text Section */}
      <h2 className="text-anon-dark font-melodrama text-7xl">Featured</h2>
      
      {/* card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10 mt-10">
        {featured.map((item) => (
          <FeaturedCard key={item.text} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
