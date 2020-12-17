# NavPrimary

This template will generate a DDRMenu with Bootstrap's `.navbar-nav` markup, so it's intended to be used inside a `.navbar` Bootstrap component.

## Directory contents

- `menudef.xml` — The menu manifest.
- `NavPrimary.cshtml` — The menu template.

_Note: If you change the name of the template file, you must update the manifest, as well._

## What's in the template

### Configuration

Variables that dictate the menu ouput:

| Option                    | Default |
| ------------------------- | ------: |
| Align nav to the right?   |    true |
| Include dropdown menus?   |    true |
| Include nested dropdowns? |    true |
| Use custom dropdown icon? |   false |

### Functions

- `buildTargetAttribute` — Adds `target` and `rel` attributes to the link, if needed.
- `buildDropdownAttributes` — Adds attributes needed for Bootstrap's dropdown plugin.

### Helpers

If you need to modify the CSS classes or HTML in your project's menu, this is where you would do that.

- `RenderNodes` – How the top-level menu is built.
- `RenderChildren` — How dropdown menus are built.

### MenuNode

These are the menu items. Each node has access to a variety of properties.

#### Properties in use

- `TabId` — Page ID. For unique CSS classes and IDs.
- `Text` — Page name. The menu link text.
- `Url` — Page URL.
- `Target` — Link target.
- `Enabled` — If enabled, use URL as the `href`. If not, use `#`.
- `Breadcrumb` — If in breadcrumb, give node an `.active` class.
- `Children` — How we get dropdown menus.
- `Last` — Used once to change dropdown menu alignment.

#### Properties not being used

- `Title` — The full page title. **Not being used.**
- `Selected` — If the page is selected. **Not being used.**
- `Separator` — If the node is a separator. **Not being used.**
- `Icon` — The URL of the page icon. **Not being used.**
- `LargeImage` — The URL of the large page icon. **Not being used.**
- `First` — If the page is the first in the list. **Not being used.**
- `Depth` — The depth of the current page. **Not being used.**
- `Keywords` — Page keywords. **Not being used.**
- `Description` — Page description. **Not being used.**
- `Parent` — The parent of the current node. **Not being used.**

For more information, see [the source code](https://github.com/dnnsoftware/Dnn.Platform/blob/development/DNN%20Platform/Modules/DDRMenu/MenuNode.cs#L14) for the `MenuNode` class implementation.
