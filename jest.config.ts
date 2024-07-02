import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.app.json",
        diagnostics: {
          ignoreCodes: [1343],
        },
        astTransformers: {
          before: [
            {
              path: "node_modules/ts-jest-mock-import-meta",
            },
          ],
        },
      },
    ],
    "\\.(css)$": "jest-css-modules-transform",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts", "src/**/*.tsx"],
  coveragePathIgnorePatterns: ["src/main.tsx"],
};

export default config;
