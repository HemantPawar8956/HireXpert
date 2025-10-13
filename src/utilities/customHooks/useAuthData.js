export const useAuthData = () => {
  const user = JSON.parse(localStorage.getItem("token")); 
  return user;
};