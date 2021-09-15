# AccuTheme

The Accuraty Solutions Bootstrap 4.6 based theme starter kit for DNN projects.
 
 - customized Bootstrap with Bootstrap Icons
 - JS module bundling
 - CSS optimizations
 - media file optimizations (images, SVG, videos)
 - linting (opinionated?)
 - favicon generator
 - package to Dnn Zip installer (Webpack)
 
## Roadmap and Feature Ideas

 - improved SCSS file structure
 - improved workflow supporting Modes; deploy, setup, design, develop, staging, golive, production
 - convert monolithic Build to minimum or configurable
 - more utility tasks (like package and favicons)
 - utility to switch Modes and optionally build
 - convert Gulp tasks to Webpack
 - rework AccuTheme and AccuKit utilities
 - rework Env/Config/Settings for Workflow and Mode; Presets/Defaults, Client/Project, Modes
 - Tailwind ?? (re-architect deploy/setup)
 - Boostrap v5 ??

## Project requirements and recommendations

- DNN site already deployed
- [Node >= v14.17.x](https://nodejs.org/en) - LTS 
- [NVM-Windows](https://github.com/coreybutler/nvm-windows) to manage your Node versions

## Getting started

- [Initial setup](https://github.com/Accuraty/AccuTheme#initial-setup) (you are starting from scratch)
- [Cloning locally](https://github.com/Accuraty/AccuTheme#cloning-locally) (first time adding this project to your machine)

### Initial setup

_This assumes the project has not been started. If it already exists on GitHub and you need to get set up on your own machine, skip to [Cloning locally](https://github.com/Accuraty/AccuTheme#cloning-locally)._

#### 1. Get the code

Create a new project folder on your local machine, `cd` into that directory, and run the following commands in your terminal:

```
git clone -b main --single-branch https://github.com/Accuraty/AccuTheme.git .
rm -rf .git
git init
```

That will clone the `main` branch of this repo into your current directory, delete the Git history, and start fresh.

#### 2. Set your FTP config

If you are using Visual Studio Code, go to the `.vscode/` directory. Duplicate `sftp.json.example`, save it as `sftp.json`, and update the first three lines with your credentials.

#### 3. Getting code to the server

Although `sftp.json` is configured to automatically push files to the server, you need to manually upload certain directories when you first set up a project. Right-click on the `app/` folder and choose "Upload Folder" from the menu.

#### 4. Install and build packages

From your terminal, run `npm install`.

After the install is finished, `npm run build` will automatically run. This compiles assets (styles, scripts, etc.), but Gulp won't stay in "watch" mode.

#### 5. Create GitHub repo

Go to the [Accuraty GitHub account](https://github.com/Accuraty) and add a new repository.

Name the repository using the client code and project year, make the repo private, and then **do not initialize with a README**. Skip that step since you will import the existing local repository you just created.

Back in your terminal, run the following commands:

```
git add -A
git commit -m "Initial commit"
```

Then, follow the **"…or push an existing repository from the command line"** instructions in the new GitHub repo, which is to run these commands (be sure to update the code below with your repo URL):

```
git remote add origin _GITHUB_URL_HERE_
git push -u origin main
```

#### 6. Update this README

Be kind to others. Make these changes:

- Update the title and description to match the project.
- Delete everything but the "Cloning locally" steps from "Getting started."
- Replace **\_GITHUB_URL_HERE\_** with the URL of the repo you created.

### Cloning locally

#### 1. Get the code

Navigate to the directory where you want to store the project, copy the GitHub URL, and then run the following commands in your terminal:

```
git clone _GITHUB_URL_HERE_
```

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
