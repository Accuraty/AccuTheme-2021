# Menus

This folder contains the code necessary to create custom menus using [DDRMenu](http://www.dnnsoftware.com/wiki/ddrmenu-user-guide).

## Provided menus

The following menus are included:

- `NavPrimary`
- `NavSecondary`

### NavPrimary

Generates a Bootstrap `.navbar-nav` menu, so it's intended to be used inside a `.navbar` component.

### NavSecondary

An exact copy of `NavPrimary`.

## How to use DDRMenu

The `<dnn:MENU>` skin object is registered in all Accuraty projects, so to use a menu, add the tag to the proper place in any skin `.ascx` file (e.g., in `includes/_header.ascx`) and pass the required menu options. The template will output a list of `MenuNode` items.

### Menu options

The attributes added to the `<dnn:MENU>` skin object:

- `MenuStyle`
- `NodeSelector`
- `IncludeNodes`
- `ExcludeNodes`
- `IncludeHidden`

#### MenuStyle

Which menu template to use. These templates should be stored in the `menu/` directory at the root of the skin folder, so you'll set this attribute to `menu/` plus the name of the folder where the `.cshtml` template is.

For example, the main menu is set to `MenuStyle="menus/NavPrimary"`.

#### NodeSelector

Determines which part of the page hierarchy to show in the menu.

#### IncludeNodes

A comma-separated list of page IDs to include in the menu (e.g., `IncludeNodes="120,173,201"`).

#### ExcludeNodes

Works like `IncludeNodes`.

#### IncludeHidden

If set to `true`, hidden pages will be included.

### MenuNode

These are the menu items. Each node has access to a variety of properties:

- `TabId` — Page ID
- `Text` — Page name
- `Title` — The full page title.
- `Url` — Page URL
- `Target` — Link target.
- `Enabled` — If the page is enabled.
- `Selected` — If the page is selected.
- `Breadcrumb` — If the page is in the current breadcrumb path.
- `Separator` — If the node is a separator.
- `Icon` — The URL of the page icon.
- `LargeImage` — The URL of the large page icon.
- `First` — If the page is the first in the list.
- `Last` — If the page is the last in the list.
- `Depth` — The depth of the current page.
- `Keywords` — Page keywords.
- `Description` — Page description.
- `Children` — The children of the current node.
- `Parent` — The parent of the current node.

For more information, see [the source code](https://github.com/dnnsoftware/Dnn.Platform/blob/development/DNN%20Platform/Modules/DDRMenu/MenuNode.cs#L14) for the `MenuNode` class implementation.

---

Reference: [DNN Wiki](http://www.dnnsoftware.com/wiki) > [DDRMenu Reference Guide](http://www.dnnsoftware.com/wiki/ddrmenu-reference-guide)
