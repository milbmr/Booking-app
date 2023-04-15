export const getProtocol = () => {
  const isProd = process.env.NODE_ENV === "production";
  if (isProd) "https://";
  return "http://";
};

export const getAbsoluteUrl = () => {
  const protocol = getProtocol();
  if (process.env.VERCEL_URL) `${protocol}${process.env.VERCEL_URL}`;
  return `${protocol}localhost:3000`;
};
