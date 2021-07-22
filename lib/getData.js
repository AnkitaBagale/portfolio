export const getMySkills = async () => {
  const data = (await import('./mySkills.json')).default;
  return data.skills;
};

export const getFeaturedProjects = async () => {
  const data = (await import('./projects.json')).default;
  return [data.projects[0], data.projects[1], data.projects[2]];
};

export const getProjects = async () => {
  const data = (await import('./projects.json')).default;
  return data.projects;
};

export const getFeaturedBlogs = async () => {
  const data = (await import('./blogs.json')).default;
  return [data.blogs[0], data.blogs[1], data.blogs[2]];
};

export const getBlogs = async () => {
  const data = (await import('./blogs.json')).default;
  return data.blogs;
};
