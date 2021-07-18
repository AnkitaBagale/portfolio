export const getMySkills = async () => {
  const res = await fetch('http://localhost:3000/skills.json');
  const data = await res.json();
  return data;
};
