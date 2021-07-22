export const BlogCard = ({ blogDetails }) => {
  return (
    <div className="shadow-md bg-pastelBlue-lightest rounded-lg p-4 flex flex-col">
      <h3 className="text-lg font-semibold">{blogDetails.title}</h3>
      <small>
        <time>{blogDetails.date}</time> • {blogDetails.duration}
      </small>
      <p className="pt-2 flex-grow">{blogDetails.shortDescription}</p>
      <div>
        <a
          href=""
          className="inline-block cursor-pointer bg-pastelBlue-dark hover:bg-pastelBlue-darker transition delay-100 ease-in-out text-xs font-medium text-white py-1.5 px-4 mt-2 mr-2 rounded-3xl"
        >
          Read
        </a>
      </div>
    </div>
  );
};
