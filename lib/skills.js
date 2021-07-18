import path from 'path';

export const getMySkills = async () => {
  const url = path.join(process.cwd(), 'skills.json');
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
