export const BlogDetailCard = ({ blog }) => {
  return (
    <div className="shadow-md bg-pastelBlue-lightest rounded-lg p-4 mt-8">
      <h3 className="text-lg font-semibold">{blog.title}</h3>
      <small>
        <time>{blog.date}</time>
      </small>
      <p className="pt-2">{blog.description}</p>

      <a
        target="_blank"
        rel="noreferrer"
        href={blog.link}
        className="inline-block cursor-pointer bg-pastelBlue-dark hover:bg-pastelBlue-darker transition delay-100 ease-in-out text-xs font-medium text-white py-1.5 px-4 mt-4 mr-2 rounded-3xl"
      >
        Read
      </a>
    </div>
  );
};
