# DHILab Medical Drugs Explorer

![GUI](https://img.shields.io/badge/GUI-USWDS_2.7.1-0B1013)
![Language](https://img.shields.io/badge/Language-JavaScript-026300)
![JS Library](https://img.shields.io/badge/JS_Library-React-0047AB)
![Responsive](https://img.shields.io/badge/Responsive-Yes-5D185B)
![Known Bugs](https://img.shields.io/badge/Known_Bugs-0-D83933)

## Description

The DHILab Medical Drugs Explorer is designed to pull drugs' information using the openFDA API based on the user's query.

## Mission

Our mission is to create a free and open source medical drugs explorer where all doctors and developers can contribute to it.

## Live Demo

- Live demo on DHILab.com: https://dhilab.com/medical-drugs-explorer-live/
- Live demo on GitHub.io: https://labinatorsolutions.github.io/medical-drugs-explorer-live/

## Features

- Well-constructed medical drugs explorer that utilizes the [openFDA API](https://open.fda.gov/).
- Responsive.
- Accessible.
- Beginner-friendly.
- Intuitive interface.
- Valid source codes.

## Disclaimer

Please do not rely on this application or openFDA to make decisions regarding medical care. Always speak to your health provider about the risks and benefits of FDA-regulated products. This application is not a medical advisor, and it is developed only for informational purposes.

## Build Instructions

1. Navigate to the **src/** directory using your terminal.
2. Run the following commands:

```
npm install
npm run build
```

3. Test the app locally or online using a live server.

**Note:** If you are testing the app in a subdirectory, make sure to tune the base URL correctly before testing.

## GitHub Pages Deployment Instructions

If you wish to deploy your forked version to GitHub, follow the instructions below.

1. Edit the "package.json" file by adding the following line after the "name" declaration:

```
"homepage": "https://{GITHUB_USERNAME}.github.io/{REPOSITORY_NAME}/",
```

> Note: Replace {GITHUB_USERNAME} with your GitHub username and {REPOSITORY_NAME} with your repository name.

2. Install "gh-pages":

```
npm install gh-pages --save-dev
```

3. Deploy the app:

```
npm run deploy
```

## Contribution

We welcome all developers and doctors to contribute to this repository by adding features or fixing bugs. The source codes will always be free and open source.

**List Of Current Contributors:**

https://github.com/LabinatorSolutions/medical-drugs-explorer/graphs/contributors

## Donations

If you like to donate and support this project, you can do so by submitting your donations to this link: [https://paypal.me/Labinator](https://paypal.me/Labinator)

## License

GNU GPLv3: https://www.gnu.org/licenses/gpl-3.0-standalone.html

## Credits

- [DHILab](https://dhilab.com/)
- [Labinator](https://labinator.com/)
- [USWDS](https://designsystem.digital.gov/)
- [OpenFDA](https://open.fda.gov/)