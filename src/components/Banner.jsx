import bannerImg from "../assets/banner.png";
const Banner = () => {
  return (
    <div className="flex flex-col-reverse py-16 md:flex-row justify-between items-center gap-12">
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          New Releases this Week
        </h1>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum rem
          quisquam, impedit accusantium laboriosam eaque minima ipsam. Nostrum
          porro quo ut autem vero adipisci, quas natus illum? Est vel placeat
          odit, ipsa voluptatibus, excepturi delectus illo sint ducimus eligendi
          omnis!
        </p>
        <button className="px-8 py-2 bg-primary rounded-md">Subscribe</button>
      </div>
      <div className="md:w-1/2 w-full flex justify-center items-center">
        <img src={bannerImg} />
      </div>
    </div>
  );
};

export default Banner;
