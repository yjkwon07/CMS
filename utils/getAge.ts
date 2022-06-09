export const getAge = (dateString: string) => {
  // 20220202 -> 2022-02-02
  const replaced = dateString?.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
  const today = new Date();
  const birthDate = new Date(replaced);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }
  return age;
};
