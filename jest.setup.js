// import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

// jest.config.js
module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testMatch: ["**/test/*.test.js", "!**/src/**"],
    transform: {
        "^.+\\.js$": "babel-jest",
    },
};