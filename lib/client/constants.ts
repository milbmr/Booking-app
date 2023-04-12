export const Routes = {
  SITE: {
    HOME: "/",
  },
  API: {
    BASEURL: "http://localhost:3000/api/",
    USERS: "/users",
    FACILITIES: "/facilities",
    HOTELS: "/hotels",
    SEARCH: "/search",
  },
} as const;

export const Redirect = {
  NOT_FOUND: {
    notFound: true,
  },
  500: './500'
} as const;
