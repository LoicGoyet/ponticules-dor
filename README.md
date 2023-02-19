# Ponticule d'Or result reveal application

## Getting Started

First, install the dependencies

```bash
npm ci
```

Then you can run the project either in dev mode or production mode

```bash
# dev mode
npm run dev

# production mode
npm run build && npm run start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tests, typecheck and linters

To run jest tests

```bash
npm run test
# or
npm run test:watch
```

You can also via CLI test the TypeScript compliance:

```bash
npm run typecheck
```

Both [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) are setup in this project.

To lint the files just run

```bash
npm run lint
```

You can also fix improper code style syntax before linting doing

```bash
npm run lint:fix
```

### Visual Code Studio integration
For [Visual Code Studio](https://code.visualstudio.com/) users, the project comes with a workspace setting in order to format on save following Prettier and ESLint rules.

To do so, you need to install the following extension to your Visual Code Studio:
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)


## Technical stack
This project has been bootstraped with [LoicGoyet/hiring-test-boilerplate](https://github.com/LoicGoyet/hiring-test-boilerplate).

### Main technologies
* [TypeScript](https://www.typescriptlang.org/)
* [React 18 release candidate](https://reactjs.org/blog/2021/12/17/react-conf-2021-recap.html)
* [Next.js](https://nextjs.org/)
* [styled-components](https://styled-components.com/)

### Tooling
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [Husky](https://typicode.github.io/husky/#/)
* [lint-staged](https://github.com/okonet/lint-staged)



