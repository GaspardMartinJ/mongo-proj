module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/__tests__/**/*.test.ts"], // Match test files
    moduleFileExtensions: ["ts", "js"],
    rootDir: "./src", // Look for tests in the src directory
};
