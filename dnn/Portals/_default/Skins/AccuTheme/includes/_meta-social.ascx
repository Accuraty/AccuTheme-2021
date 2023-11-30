<script runat="server">
  Sub Page_Load(ByVal Sender As System.Object, ByVal e As System.EventArgs)
    Page.Header.Controls.Add(New LiteralControl("<meta property=""og:url"" content=""" & PortalSettings.ActiveTab.FullUrl & """>"))
    Page.Header.Controls.Add(New LiteralControl("<meta property=""og:type"" content=""website"">"))
    Page.Header.Controls.Add(New LiteralControl("<meta property=""og:title"" content=""" & PortalSettings.ActiveTab.Title & """>"))
    Page.Header.Controls.Add(New LiteralControl("<meta property=""og:image"" content=""" & SkinPath & "assets/images/{LINK TO IMAGE}"">"))
    Page.Header.Controls.Add(New LiteralControl("<meta property=""og:description"" content=""" & PortalSettings.ActiveTab.Description & """>"))
    Page.Header.Controls.Add(New LiteralControl("<meta property=""og:site_name"" content=""" & PortalSettings.PortalName & """>"))
    Page.Header.Controls.Add(New LiteralControl("<meta property=""og:locale"" content=""en_US"">"))
  End Sub
</script>
