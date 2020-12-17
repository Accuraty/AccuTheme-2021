# Styles

Theme styles and standalone modules.

## Architecture

Our pattern is to split the codebase into meaningful, separated folders so you can easily find what you need.

- `theme/`
  - `base/`
  - `components/`
  - `layout/`
  - `utilities/`
- `Modules/`
- `*.scss` (Skin stylesheets)

## Skin stylesheets

The skin's primary stylesheets must be at the root of the `styles/` directory and must not begin with a leading underscore. `Skin.scss` must not be renamed. The others must match the name of their skin template file. For example, if you have an `Events.ascx` file, then the stylesheet must be `Events.scss`.

These files are primarily `@import` directives, however page-specific files (e.g., `Home.scss`) will often have overrides or page-specific components.

## Partials

Sass stylesheets import whichever partials are needed according to the folder they live in, one after the other in the following order:

1. `base/`
2. `components/`
3. `layout/`
4. `utilities/`

Generally, the only stylesheet that imports partials from each of these directories will be `Skin.scss`, since that is what compiles into the global stylesheet (`Skin.css`).

_Note: If you add any new partials, you will need to add an import statement to whichever stylesheet you need it to belong._

### Other folders

These are DNN-specific folders that contain styles specific to DNN: Containers, 2sxc modules, etc. These do not have a leading underscore and are in Title case. The default folders are:

- `Containers/`
- `Modules/`

Separating these files in this way gives us a simple way to target Sass files during the Gulp build process. Why? Because the compiled code needs to be stored in a different location than the main files.

## Bootstrap

Bootstrap is the default framework for Accuraty projects and is a requirement for this starter kit, so run `npm install` from the command line to include Bootstrap in your local `node_modules/` folder. The `Skin.scss` file has an import statement to include the Sass files from Bootstrap.

### Modifying Bootstrap

Since our projects are built on Bootstrap, modifying these styles is something you will do on every project. One approach is to accept the Bootstrap code as is and then add overrides in our own stylesheets.

For example, if the design calls for all buttons to have no rounded corners, you could override Bootstrap's `.btn` class in the `_buttons.scss` file inside the `components/` folder like so:

```css
.btn {
  border-radius: 0;
}
```

This new code will override the vendor-provided styles and is certainly valid. **However, this method introduces more code and increases file size. It is not recommended.**

### A Better Way

Because we import Bootstrap's source Sass files, we can take advantage of its variables and the `!default` flag that is applied. From the [Sass documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_defaults_default):

> You can assign to variables if they aren't already assigned by adding the `!default` flag to the end of the value. This means that if the variable has already been assigned to, it won't be re-assigned, but if it doesn't have a value yet, it will be given one.

Our custom `_variables.scss` includes the same variables as Bootstrap — except we drop the `!default` flag. Then, in `Skin.scss`, we import our custom file before importing the Bootstrap code. This means when the codebase compiles, the first occurance of a Bootstrap variable actually comes from our own `_variables.scss` file, so the assigned value is what we set it as. Then, when the Bootstrap variable is reached, that value is ignored because of the `!default` flag.

This approach lets us easily set Bootstrap's components without introducing any more code, and it keeps our styles and Bootstrap's styles consistent.

**For this reason, it is critical we use Boostrap's variable names as our own.**

## Sass at a glance

Sass extends CSS with syntax advancements and features like variables, nesting, math operations, and more. Learn about the basics [here](http://sass-lang.com/guide).

### Sass vs. SCSS

There are two Sass syntaxes available: SCSS (Sassy CSS), which uses the `.scss` extension, and SASS, which uses `.sass` as its extension. **The default syntax in this template is SCSS**. Learn more about the difference [here](http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better).

### Import

Unlike the `@import` directive in CSS, which creates an HTTP request for each use, the Sass statement does not impact performance. To preserve readability, file extensions are not necessary in an `@import` and are therefore omitted.

### Partials

These are partial Sass files that contain snippets of code that are imported into the main file. This is a good way to modularize CSS in order to write code that adheres to the [DRY](https://en.wikipedia.org/wiki/Don't_repeat_yourself) principle and is easier to maintain.

Partials are named with a preceding underscore, which lets Sass know that the file is a partial and should not be generated into a CSS file. For example: `_partial.scss`.

---

Reference: [Sass documentation](http://sass-lang.com/documentation), [Bootstrap's Sass variables on GitHub](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss)
