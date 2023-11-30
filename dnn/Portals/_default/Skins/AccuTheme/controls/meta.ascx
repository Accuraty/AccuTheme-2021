<%@ Control language="C#" Inherits="System.Web.UI.UserControl" %>
<%@ Import Namespace="DotNetNuke.Entities.Portals" %>

<script runat="server">
  protected override void OnLoad(EventArgs e)
  {
      base.OnLoad(e);
      AddMetaTags();
      AddFavicons();
  }

  private void AddMetaTags()
  {
      HtmlMeta Charset = new HtmlMeta();
      Charset.Attributes.Add("charset", "utf-8");
      Page.Header.Controls.Add(Charset);

      HtmlMeta Viewport = new HtmlMeta();
      Viewport.Attributes.Add("name", "viewport");
      Viewport.Content = "width=device-width,initial-scale=1,shrink-to-fit=no";
      Page.Header.Controls.Add(Viewport);
  }

  private void AddFavicons()
  {
      string Favicons = "<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/Portals/_default/Skins/AccuTheme/dist/media/images/apple-touch-icon.png\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/Portals/_default/Skins/AccuTheme/dist/media/images/favicon-32x32.png\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/Portals/_default/Skins/AccuTheme/dist/media/images/favicon-16x16.png\">\n<link rel=\"manifest\" href=\"/Portals/_default/Skins/AccuTheme/dist/media/images/site.webmanifest\">\n<link rel=\"mask-icon\" href=\"/Portals/_default/Skins/AccuTheme/dist/media/images/safari-pinned-tab.svg\" color=\"#5bbad5\">\n<link rel=\"shortcut icon\" href=\"/Portals/_default/Skins/AccuTheme/dist/media/images/favicon.ico\">\n<meta name=\"msapplication-TileColor\" content=\"#da532c\">\n<meta name=\"msapplication-config\" content=\"/Portals/_default/Skins/AccuTheme/dist/media/images/browserconfig.xml\">\n<meta name=\"theme-color\" content=\"#ffffff\">";
      LiteralControl FaviconsMarkup = new LiteralControl(Favicons);
      Page.Header.Controls.Add(FaviconsMarkup);
  }

  private void AddOpenGraph()
  {
      // TODO!!!!

      // Page.Header.Controls.Add(new LiteralControl("<meta property='og:url' content=" + PortalSettings.ActiveTab.FullUrl + ">"));
  }

</script>
