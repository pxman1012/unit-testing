This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

============================================================

## Setting up Jest with Next.js
```
npx create-next-app@latest --example with-jest with-jest-app
```

## Manual setup
Since the release of Next.js 12, Next.js now has built-in configuration for Jest.

To set up Jest, install jest and the following packages as dev dependencies:

npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node
# or
```
yarn add -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node
```
# or
```
pnpm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node
```

# Generate a basic Jest configuration file by running the following command:
```
npm init jest@latest
```
# or
```
yarn create jest@latest
```
# or
```
pnpm create jest@latest
```

# This will take you through a series of prompts to setup Jest for your project, including automatically creating a jest.config.ts|js file.

# Update your config file to use next/jest. This transformer has all the necessary configuration options for Jest to work with Next.js:

-- jest.config.ts
```
import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
```

-- jest.setup.ts
```
import '@testing-library/jest-dom'
```

## Add a test script to package.json:
Finally, add a Jest test script to your package.json file:

--package.json
```
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

## Creating your first test:
Your project is now ready to run tests. Create a folder called __tests__ in your project's root directory.

For example, we can add a test to check if the <Home /> component successfully renders a heading:

```
export default function Home() {
  return <h1>Home</h1>
}
```

-- __tests__/index.test.js

```
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
 
describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})
```

Optionally, add a snapshot test to keep track of any unexpected changes in your component:

--__tests__/snapshot.js
```
import { render } from '@testing-library/react'
import Home from '../pages/index'
 
it('renders homepage unchanged', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})
```

## Running your tests
Then, run the following command to run your tests:

```
npm run test
```
# or
```
yarn test
```
# or
```
pnpm test
```
