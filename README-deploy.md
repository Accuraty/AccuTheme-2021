# AccuTheme

- [Main README](/README.md) - introduction
- **Initial setup** - this document
- [Cloning locally](/README.md#cloning-locally) - first time adding this project to your machine

## Project requirements and recommendations

- DNN site already deployed
- [Node >= v14.17.x](https://nodejs.org/en) - LTS 
- [NVM-Windows](https://github.com/coreybutler/nvm-windows) to manage your Node versions

## Initial setup

_This assumes the project has not been started. If it already exists on GitHub and you need to get set up on your own machine, skip to [Cloning locally](https://github.com/Accuraty/AccuTheme#cloning-locally)._

### 1. Get the code

Create a new project folder on your local machine, `cd` into that directory, and run the following commands in your terminal:

```
git clone -b main --single-branch https://github.com/Accuraty/AccuTheme.git .
rm -rf .git
git init
```

That will clone the `main` branch of this repo into your current directory, delete the Git history, and start fresh.

### 2. Set your FTP config

If you are using Visual Studio Code, go to the `.vscode/` directory. Duplicate `sftp.json.example`, save it as `sftp.json`, and update the first three lines with your credentials.

### 3. Getting code to the server

Although `sftp.json` is configured to automatically push files to the server, you need to manually upload certain directories when you first set up a project. Right-click on the `dnn/` folder and choose "Upload Folder" from the menu.

### 4. Install and build packages

Open package.json and remove the line `"preinstall": "npx npm-force-resolutions",` from `"scripts"`, and save. The install will fail until this is done.

From your terminal, run `npm install`.

After the install is finished, `npm run build` will automatically run. This compiles assets (styles, scripts, etc.), but Gulp won't stay in "watch" mode.

Once that is done running, in package.json Ctrl-Z/add back the line `"preinstall": "npx npm-force-resolutions",` to `"scripts"` and save.

From your terminal, run `npm install`.

### 5. Create GitHub repo

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

### 6. Update this README

Be kind to others. Make these changes to README.md:

- Update the title, e.g. ABBV 202x
- Update the description, see example below
- Add " - DONE" after Initial Setup
- Replace **\_GITHUB_URL_HERE\_** with the URL of the repo you created.

#### Project Description Examples

Client Company Name custom theme for Dnn/2sxc website
 
AccuTheme Mon YYYY

<hr>

PDEG Theme, Content, and OHS
 
This project started life as accuraty-template (early 2019) and is the primary dev/staging environment for implementing the theme (Skins/PDEG), content templates, and general construction related open-heart-surgery (OHS) on an active Dnn Platform and 2sxc based project.
 
 