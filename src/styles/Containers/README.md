# Containers

This folder is for DNN container-specific stylesheets.

## Container stylesheets

When a container is active on a page, DNN will automatically include that container's stylesheet. Some containers are specifically designed for a component or otherwise have styles that are unique. For example, you might have a `StaffList.ascx` container, which is obviously only needed in a couple spots on a website. So rather than include those style rules in the global stylesheet, separate those styles into their own container-specific files to reduce bloat.

### Why this folder, though?

In order for DNN to automatically load the file, though, it **must be named the exact same as the container and saved in the same directory**.

Naming the file the same is up to you, but getting the compiled `.css` into the `Portals/Containers/` directory should not require you to move files around. Fortunately, that's what Gulp is for.

Because the build process treats all `.scss` files at the root of `src/styles/` as a skin stylesheet, creating a separate folder for container stylesheets allows us to direct Gulp to move the compiled output to the correct place.
