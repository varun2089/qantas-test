module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src/"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testURL: "http://localhost",
  testPathIgnorePatterns: ["/node_modules/"],
  transformIgnorePatterns: ["/node_modules/"],
  verbose: true,
};
