<% if (AccuTheme.isAccuratyIP()) { %>
  <div class="alert alert-warning m-0 text-monospace d-none d-md-block">
    <%-- DNN / HOST --%>
    <p>DNN <%=DotNetNuke.Application.DotNetNukeContext.Current.Application.Version.ToString(3) %> / <%=System.Environment.Version.ToString() %> / Host=<%=System.Net.Dns.GetHostName() %></p>

    <%-- THEME --%>
    <p>Theme: Skin=<strong><%=PortalSettings.DefaultPortalSkin.Split('/')[1].ToUpper() %></strong>, Layout/Container=<span title="<%=PortalSettings.ActiveTab.SkinSrc %>"><%=System.IO.Path.GetFileNameWithoutExtension(PortalSettings.ActiveTab.SkinSrc) %></span>/<span title="<%=PortalSettings.ActiveTab.ContainerSrc %>"><%=System.IO.Path.GetFileNameWithoutExtension(PortalSettings.ActiveTab.ContainerSrc) %></span></p>

    <%-- PAGE --%>
    <p class="mb-1">Page: TabID=<%=PortalSettings.ActiveTab.TabID %>, Name=<%=PortalSettings.ActiveTab.TabName %>, Title=<%=PortalSettings.ActiveTab.Title %></p>
    <div class="px-3">
      <p class="mb-1">Status: <span title="Display in Menu/Nav">IsVisible=<%=PortalSettings.ActiveTab.IsVisible %></span>, Published=<%=PortalSettings.ActiveTab.HasBeenPublished %></p>
      <p class="mb-1">Nav: Level=<%=PortalSettings.ActiveTab.Level %>, Path=<%=PortalSettings.ActiveTab.TabPath %>, <span title="Disabled in Menu/Nav (e.g. not a link)">DisableLink=<%=PortalSettings.ActiveTab.DisableLink %></span></p>
      <p class="mb-1">QueryString: Params=<%=Request.QueryString.ToJson() %></p>
    </div>
    <hr />
    <div class="small">
      <p class="mb-1">WAN IP=<%=AccuTheme.GetIpAddress() %> / <%=DateTime.Now.ToString("F") %></p>
      <p>Debug info only visible from ASL WAN IP addresses and being output from <code>includes/_footer.ascx</code> in Skin.</p>
    </div>
  </div>
<% } %>
