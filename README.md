# TypeScript Express Server with Jest and Supertest

This project is a TypeScript-based Express server with testing capabilities using Jest and Supertest.

## Setup and Usage Instructions

Follow these steps to set up the project, install dependencies, and run test cases.

```bash
# 1. Clone the repository
git clone https://github.com/your-username/your-repository.git
cd your-repository

# 2. Install dependencies
npm install

# 3. Install TypeScript globally (if not already installed)
npm install -g typescript

# 4. Install Jest, Supertest, and related testing dependencies
npm install --save-dev jest supertest ts-jest @types/jest @types/supertest

# 5. Initialize Jest with TypeScript support
npx ts-jest config:init

# 6. Start the server in development mode
npm run dev

# 7. Build the project for production
npm run build

# 8. Start the production server
npm start

# 9. Run the tests
npm test
```
