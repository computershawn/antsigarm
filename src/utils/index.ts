export const saveToLocalStorage = (key, value) => {
  const canUseLocalStorage = typeof window !== 'undefined';

  canUseLocalStorage && localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key) => {
  const canUseLocalStorage = typeof window !== 'undefined';
  const u = canUseLocalStorage
    ? JSON.parse(localStorage.getItem(key) as string)
    : null;

  return u;
};

export const removeFromLocalStorage = (key) => {
  const canUseLocalStorage = typeof window !== 'undefined';
  canUseLocalStorage && localStorage.removeItem(key);
};
