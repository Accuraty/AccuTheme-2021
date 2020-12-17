# Includes

The `includes/` folder contains code/markup that should be included in multiple layout template files. This avoids duplicating work when you have elements that need to appear consistently throughout the site.

Included files should be named with a preceding underscore (which is a helpful way to mark a file as a partial, similar to the Sass naming convention) and have the file name extension `.ascx`. For example: `_header.ascx`.

## How to use includes

The `#include` directive instructs the server to insert the contents of a file into a page. You must surround a directive with HTML comment delimiters:

```
<!--#include file="includes/_header.ascx"-->
```

## Standard and common includes

- `__debug.ascx`
- `_breadcrumb.ascx`
- `_footer.ascx`
- `_header.ascx`
- `_logo.ascx`
- `_preheader.ascx`
- `_registers.ascx`

### Debug

Outputs debug info that is only visible to users at specified IP addresses.

### Breadcrumb

`_breadcrumb.ascx` is for the breadcrumb section.

### Preheader

`_preheader.ascx` starts off with the control and register directives.

The **control directive** defines attributes that tell ASP.NET how to handle the file. The attributes we commonly use are:

```
<%@ Control Language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
```

The **register directives** inform ASP.NET which user controls will be active, and they create an association between a tag prefix and a custom control. This provides us a concise way to refer to controls. A register directive's attributes define a namespace (TagPrefix) and an alias for the class (TagName). By doing this, we can refer to the control via a token with the TagPrefix:TagName pair in the markup. For example:

#### Register

```
<%@ Register TagPrefix="dnn" TagName="BREADCRUMB" Src="~/Admin/Skins/BreadCrumb.ascx" %>
```

#### Token

```
<dnn:Breadcrumb runat="server" />
```

The `_preheader.ascx` files is also where we add stylesheets and scripts using the [Client Resource Manager](http://www.dnnsoftware.com/wiki/client-resource-management-api).

_Note: Everything in this file should be code that is included inside the `<head>` tag, except for script files that are explicitly added to the bottom of the `<body>` tag via the ForceProvided property._

### Header

`_header.ascx` contains the global header. This should generally be limited to code that appears inside the `<header>` tag.

### Footer

`_footer.ascx` contains the global footer. This should generally be limited to code that appears inside the `<footer>` tag.

### Logo

`_logo.ascx` is useful when you need to implement SVG logos inline.

#### Why inline?

Putting your SVG code inline allows you to manipulate the logo via CSS and JavaScript, and it also saves an HTTP request. But since maintaining inline SVG code can be messy, we suggest you separate it into an include file.

To learn more about SVG implementation, check out this handy guide at [SVG On The Web](https://svgontheweb.com).

---

Reference: [Microsoft Developer Network](https://msdn.microsoft.com/en-us) > [Library](https://msdn.microsoft.com/library) > [Include Directives](https://msdn.microsoft.com/en-us/library/ms525940.aspx)
