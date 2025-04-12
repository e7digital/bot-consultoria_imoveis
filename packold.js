{
  "name": "botpress",
  "private": true,
  "scripts": {
    "build": "turbo run generate && turbo run build",
    "bump": "depsynky bump --ignore-dev && pnpm -w install",
    "test": "vitest --run",
    "check:bplint": "turbo check:bplint",
    "check:dep": "depsynky check --ignore-dev",
    "check:sherif": "sherif -i zod -i axios -i query-string -i googleapis",
    "check:format": "prettier --check .",
    "check:eslint": "eslint ./",
    "check:oxlint": "oxlint -c .oxlintrc.json",
    "check:lint": "pnpm check:bplint && pnpm check:oxlint && pnpm check:eslint",
    "check:type": "turbo check:type",
    "fix:dep": "depsynky sync --ignore-dev",
    "fix:sherif": "sherif -i zod -i axios -i query-string -i googleapis --fix",
    "fix:format": "prettier --write .",
    "fix:oxlint": "oxlint -c .oxlintrc.json --fix --fix-suggestions",
    "fix:lint": "eslint --fix ./",
    "check": "pnpm check:sherif && pnpm check:dep && pnpm check:format && pnpm check:lint && pnpm check:type",
    "fix": "pnpm fix:sherif && pnpm fix:dep && pnpm fix:oxlint && pnpm fix:format && pnpm fix:lint"
  },
  "lint-staged": {
    "**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}": [
      "oxlint -c .oxlintrc.json --fix --fix-suggestions",
      "prettier --write"
    ],
    "**/*.{json,yaml,yml,md}": "prettier --write",
    "**/*.test.ts": "vitest --run"
  },
  "devDependencies": {
    "@aws-sdk/client-dynamodb": "^3.564.0",
    "@botpress/api": "1.1.0",
    "@botpress/cli": "workspace:*",
    "@botpress/client": "workspace:*",
    "@botpress/sdk": "workspace:*",
    "@bpinternal/depsynky": "0.2.0",
    "@bpinternal/readiness": "^0.0.16",
    "@stylistic/eslint-plugin": "^2.12.1",
    "@types/node": "^18.19.67",
    "@typescript-eslint/eslint-plugin": "^8.19.1",
    "@typescript-eslint/parser": "^8.19.1",
    "eslint": "^9.17.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-import": "^2.31.0",
    "eslint-plugin-jsdoc": "^50.6.1",
    "eslint-plugin-oxlint": "^0.15.5",
    "eslint-plugin-prettier": "^5.2.1",
    "eslint-plugin-unused-imports": "^4.1.4",
    "globals": "^15.14.0",
    "husky": "^9.1.7",
    "lint-staged": "^15.4.3",
    "oxlint": "^0.15.5",
    "prettier": "^3.4.2",
    "retry-cli": "^0.7.0",
    "semver": "^7.3.8",
    "sherif": "1.0.1",
    "ts-node": "^10.9.2",
    "turbo": "^2.3.3",
    "typescript": "^5.6.3",
    "typescript-eslint": "^8.19.1",
    "vitest": "^2.1.4"
  },
  "packageManager": "pnpm@8.6.2"

  "start": "echo 'No start script yet. Add your start command here.' && sleep 3600"
}
