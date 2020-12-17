# Components

We organize small components inside the `_components/` folder. While `_layout/` is macro (defining the global wireframe), `_components/` is focused on micro. This folder contains various widgets, such as buttons, sliders, images, tables, lists, etc. There are usually a lot of files in `_components/`.

## Guidelines

CSS is a messy language. To keep stylesheets slim and efficient, think of a website as a collection of small, resuable components. Components can be anything as long as they:

- do one thing and one thing only;
- are reusable and reused across the project;
- are independent.

For example, a search form should be treated as as a component. It should be reuseable — in different positions, on different pages, for different situations. It should not depend on its position in the DOM (e.g., footer, sidebar, main content, etc.).

Most any interface can be thought of as small components coming together to form large blocks. This is the paradigm we should stick to in our stylesheets, as it will not only shorten the amount of CSS needed but also make code far easier to maintain.
