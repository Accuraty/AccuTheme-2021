# AccuTheme Containers

A **container** is similar to a layout template, except a container's scope is a single pane, whereas a layout template's scope is the entire page. A container is associated with a **module**, which can generate dynamic content or perform other functionality. Containers allow designers to seamlessly integrate modules into a cohesive website design.

## How are they used?

In short, containers are applied to modules via their settings. Think of it like giving the module a template, similar to how you apply themes to pages.

## Requirements

- Each container is written in ASCX, so the file needs a `<%@ Control %>` tag.
- A container must contain exactly one pane called `ContentPane`.
- The single pane must include `runat="server"` in the element.
- A pane can only be one of the following: `<div>`, `<p>`, `<span>`, or `<td>`.
- Use our BEM-like standards for class names (e.g., `.DnnModule__content`).

_Note: Since containers are associated with modules and DNN automatically applies the class `.DnnModule` to all modules, this is why we use that as the block name for our BEM-like structure._

An example of a basic container file:

```
<%@ Control AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Containers.Container" %>
<div runat="server" id="ContentPane" class="DnnModule__content"></div>
```

## Theme objects

You can also add extra elements (DNN calls these "theme objects") to your container. The following theme objects are relevant to containers:

- ICON — Displays the module icon.
- TITLE — Displays the module title.

### Using theme objects

In order to use these objects, you have to register the tag and add the ASCX token into the markup. For example:

```
<%@ Control AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Containers.Container" %>
<%@ Register TagPrefix="dnn" TagName="TITLE" Src="~/Admin/Containers/Title.ascx" %>

<h2><dnn:Title runat="server" id="dnnTitle" class="DnnModule__title" /></h2>
<div runat="server" id="ContentPane" class="DnnModule__content"></div>
```

This code expands on the basic example from earlier by adding a `<% Register %>` tag and the `<dnn:Title>` token. Because this container is designed to use the title as an `<h2>`, we wrap the ASCX token with the appropriate tags.

---

Resource: [DNN Documentation Center](http://www.dnnsoftware.com/docs/) > [Designers](http://www.dnnsoftware.com/docs/designers/index.html) > [Creating a Container](http://www.dnnsoftware.com/docs/designers/creating-themes/create-container.html)
