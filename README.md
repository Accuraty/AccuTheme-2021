# AccuTheme-2021

The Accuraty Solutions Bootstrap 4.6 based theme starter kit for DNN projects.
 
 - [ ] customized Bootstrap with Bootstrap Icons
 - [ ] JS module bundling
 - [ ] CSS optimizations
 - [ ] media file optimizations (images, SVG, videos)
 - [ ] linting (opinionated?)
 - [ ] favicon generator, move to Webpack
 - [x] package to Dnn Zip installer (Webpack)
 - [x] converted from CJS to ESM in Sep 2021
 - [x] Node works v16.13+ LTS (Dec 2021)
 - [x] Reconfigure for multi-project (Jan 2022)
 
## Roadmap and Feature Ideas

 - improved SCSS file structure
 - improved workflow supporting Modes; deploy, setup, design, develop, staging, golive, production
 - convert monolithic Build to minimum or configurable
 - more utility tasks (like package and favicons)
 - utility to switch Modes and optionally build
 - convert Gulp tasks to Webpack (or newer??)
 - rework AccuTheme and AccuKit utilities (see JRF, AccuCode)
 - rework Env/Config/Settings for Workflow and Mode; Presets/Defaults, Client/Project, Modes
 - Boostrap v5 ??
 - TailwindCSS ?? (re-architect deploy/setup)
 

## Project requirements and recommendations

- DNN site already deployed
- [Node/NPM](https://nodejs.org/en) - Node >= v14.17.x or v16.x
- [NVM-Windows](https://github.com/coreybutler/nvm-windows) to manage your Node versions

## Getting started

- [Initial setup](/README-deploy.md#initial-setup) - you are starting from scratch
- [Cloning locally](/README.md#cloning-locally) - first time adding this project to your machine

### Cloning locally

#### 1. Get the code

Navigate to the directory where you want to store the project, copy the GitHub URL, and then run the following commands in your terminal:

```
git clone _GITHUB_URL_HERE_
```

**OPTIONAL** - install these Repos if you plan to update them or want the code available locally

- [AccuCode](https://github.com/Accuraty/AccuCode) - AccuKit and other Dnn standard utilities in /App_Code
- [AccuCUE](https://github.com/Accuraty/AccuCUE) - Accuraty's 2sxc shared assets, utilities, helpers, etc.

Make sure your terminal's CWD (current working directory) is the root of the project (the folder where you just cloned the main project in to), then run the following commands:

```
git clone https://github.com/Accuraty/AccuCode ./app/App_Code

git clone https://github.com/Accuraty/AccuCUE ./app/Portals/0/2sxc/Content/Accu

copy .vscode/AccuTheme.gitmodules .gitmodules
```
--- end of OPTIONAL ---<br>

#### 2. Set your FTP config

If you are using Visual Studio Code, navigate to the `.vscode/` directory. Duplicate `sftp.json.example`, configure it with your credentials, and save it as `sftp.json` to continue.

#### 3. Install and build packages

Next, run `npm install`.

After the install is finished, `npm run build` will automatically run. This compiles assets (styles, scripts, etc.), but Gulp won't stay in "watch" mode.

#### 4. Build the assets

Run `npm start`.

This will kick off the Gulp tasks to optimize and compile assets (images, styles, scripts, etc.). It will also continue watching for changes to source files.

To exit "watch" mode, press `Control-C` in your terminal.

To start watching again, run `npm start`.

#### 5. Push changes to GitHub

Because you cloned the repository using the GitHub URL, your local repo's `origin` is properly set. However, if you get an error message when you try to push your changes up to remote, it's because you do not have permission to write to the private repo.

Make sure (1) [your GitHub credentials are correct](https://help.github.com/en/articles/caching-your-github-password-in-git), or (2) your GitHub username is added as a collaborator on this project.
