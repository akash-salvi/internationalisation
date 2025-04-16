### Steps to run

1. Clone the repo
2. Move inside the cloned repo `cd internationalisation`
3. Run `npm install` to install all dependency
4. Run `npm run dev` to run the app

### Lingui Check

1. Use lingui macros and add translation to the codebase
2. Run `npx lingui extract` to extract the new macro details to all locale files
3. Run `npx lingui compile` to generate a compiled file for all lingui po files (Facing issue with `catalogsMergePath` config)
