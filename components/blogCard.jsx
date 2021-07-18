const BlogCard = ({ blogDetails }) => {
  return (
    <div className="shadow-md bg-pastelBlue-lightest rounded-lg p-4">
      <h3 className="text-lg font-semibold">{blogDetails.title}</h3>
      <small>
        <time>{blogDetails.date}</time> • {blogDetails.duration}
      </small>
      <p className="pt-2">{blogDetails.description}</p>
    </div>
  );
};

export default BlogCard;
