export const currentUserKey = 'currentUserKey';
export const afterLogin = (currentser: any): void => {
  localStorage.setItem(currentUserKey, JSON.stringify(currentser));
};

export const afterLogout = (): void => {
  localStorage.removeItem(currentUserKey);
};

export const getCurrentUser = (): API.CurrentUser => {
  return JSON.parse(localStorage.getItem(currentUserKey) as string);
};
