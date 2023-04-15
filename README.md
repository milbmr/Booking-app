This app is built around latest Next.js stack. It is composed of the best practices described in official docs combined with my decisions derived from my own experience and knowledge that I have gathered.

## Demo

### Live production demo:
 -  [https://skytra.vercel.app](https://skytra.vercel.app)

## Screenshots

#### Desktop:
<img src="https://user-images.githubusercontent.com/94010370/231530853-baab1549-e6bc-4f73-b421-9af4243b0909.png" width="900" height="400" />
<img src="https://user-images.githubusercontent.com/94010370/231531847-3d8461b0-2bae-43cf-9606-78c6ec1bdd6c.png" width="900" height="400" />
<img src="https://user-images.githubusercontent.com/94010370/231532137-66f4f6c6-9968-4e62-9614-75c00745e023.png" width="900" height="400" />

#### Mobile:
<img src="https://user-images.githubusercontent.com/94010370/231532751-46d4938a-a5f9-4455-a927-dc065cc5caff.png" width="193" height="309" /><img src="https://user-images.githubusercontent.com/94010370/231533592-71e1000f-b97b-446c-bb1c-782122b040dd.png" width="193" height="309" /><img src="https://user-images.githubusercontent.com/94010370/231534061-6dcd963e-e76a-49d2-8f7d-65a47a2d0a51.png" width="193" height="309" /><img src="https://user-images.githubusercontent.com/94010370/231534130-de4f3397-775f-410d-8334-70ff77a4db32.png" width="193" height="309" /><img src="https://user-images.githubusercontent.com/94010370/231534175-108ee9f7-0637-4fdf-9cd0-cd80d852d6d1.png" width="193" height="309" />
<img src="https://user-images.githubusercontent.com/94010370/231534227-72321815-981e-4a68-ae54-8ee0db28a5e2.png" width="193" height="309" /><img src="https://user-images.githubusercontent.com/94010370/231535338-e95baf97-9398-4d7c-9383-00b1c4b0ba75.png" width="193" height="309" /><img src="https://user-images.githubusercontent.com/94010370/231535368-ebe375be-7d14-4d9b-afbf-66cd7d597cbd.png" width="193" height="309" /><img src="https://user-images.githubusercontent.com/94010370/231535417-387b4c9b-56a9-4506-b7c2-689f852ea9b5.png" width="193" height="309" /><img src="https://user-images.githubusercontent.com/94010370/231535439-ff1dc1a5-2c0b-4bbe-84df-ec582012d517.png" width="193" height="309" />

## Features

#### Tech Stack:

React <code>18.2.0</code>, Next.js <code>13.0.1</code>, Node.js <code>16.17.0</code>, Mongodb <code>4.13.0</code>, TypeScript <code>5.0.2</code>, Redux, Axios, Redux toolkit, RTK query, React Hook Form, Zod, sass <code>1.56.0</code>, TailwindCSS <code>3.3.0</code>, Jest <code>29.4.2</code>, Testing Library React.

#### Frontend:
- authentication with next-auth,Google and Credentials providers
- uses all Next.js features - routing, SSR, SEO, Image component, error pages, .env* files...
- fully responsive design with TailwindCSS, SCSS and BEM
- fully configured TypeScript, ESLint and Prettier
- loading and error states handled with Suspense and ErrorBoundary
- forms with React Hook Form, Zod validation schemas
- data fetching and server state with RTK query and custom hooks

#### Backend:
- uses Next.js API
- Mongodb atlas
- next-connect API handlers with middleware for validation and protected routes
- request objects validated with Zod schemas

#### Testing:
- Jest and testing-library/react for unit and integration tests

#### Production:
- Dockerized ready to be deployed on VPS
