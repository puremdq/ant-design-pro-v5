/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser | undefined }) {
  const { currentUser } = initialState || {};
  const s = currentUser?.access as any;
  return {
    admin: s instanceof Array ? s.includes('admin') : false,
  };
}
