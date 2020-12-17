# Source

The `src/` folder includes all stylesheets, fonts, images, and scripts needed to create the skin.

## Architecture

- `media/`
  - `fonts/`
  - `svg/`
  - `images/`
- `scripts/`
- `styles/`

_Note: If new directories are needed, you will need to modify the Gulp config to account for these new assets._

### fonts/

Source files for fonts included with the project are saved here.

### svg/

SVG files for icons, logos, etc.

### images/

Images that are used in the skin itself (e.g., backgrounds, design resources, logos, favicon).

_Note: Images that are used as content and could be managed by the client should be stored in `Portals/0/SiteContent`._

### scripts/

JavaScript modules, global scripts, and page-specific resources.

### styles/

This is the heart of the project's styles. All custom Sass files used to create the CSS for the skin, containers, and modules are here.
