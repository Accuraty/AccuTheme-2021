<% if (AccuTheme.isAccuratyIP()) { %>
  <div class="alert alert-warning m-0 text-monospace" role="alert">
    <%-- DNN / HOST --%>
    <div class="mb-2">
      <p>DNN <%=DotNetNuke.Application.DotNetNukeContext.Current.Application.Version.ToString(3) %> / <%=System.Environment.Version.ToString() %> / Host=<%=System.Net.Dns.GetHostName() %></p>
    </div>

    <%-- THEME --%>
    <div class="mb-2">
      <p>Theme: 
        Portal = <strong><%=PortalSettings.DefaultPortalSkin.Split('/')[1].ToUpper() %></strong>, 
        Admin = <%=PortalSettings.DefaultAdminSkin.Split('/')[1].ToUpper() %>, 
        <span title="no plans to upgrade Bootstrap to v5 - 20210808 JRF">Bootstrap v4.6.2</span>
      </p>
    </div>

    <%-- PAGE --%>
    <div class="">
      <p class="mb-1">Page: TabID=<%=PortalSettings.ActiveTab.TabID %>, Name=<%=PortalSettings.ActiveTab.TabName %>, Title=<%=PortalSettings.ActiveTab.Title %></p>
      <div class="px-3">
        <div class="mb-0">Theme: 
          <span title="<%=PortalSettings.ActiveTab.SkinSrc %>">
            SkinSrc filename=<%=System.IO.Path.GetFileNameWithoutExtension(PortalSettings.ActiveTab.SkinSrc) %>
          </span>,   
          <span title="<%=PortalSettings.ActiveTab.ContainerSrc %>">
            ContainerSrc filename=<%=System.IO.Path.GetFileNameWithoutExtension(PortalSettings.ActiveTab.ContainerSrc) %>
          </span>
        </div>
        <div class="mb-0">Status: 
          <span title="Display in Menu/Nav">IsVisible=<%=PortalSettings.ActiveTab.IsVisible %>, </span>  
          <span>Published=<%=PortalSettings.ActiveTab.HasBeenPublished %> </span>
        </div>
        <p class="mb-0">
          Nav: Level=<%=PortalSettings.ActiveTab.Level %>, 
          Path=<%=PortalSettings.ActiveTab.TabPath %>, 
          <span title="Disabled in Menu/Nav (e.g. not a link)">DisableLink=<%=PortalSettings.ActiveTab.DisableLink %> </span>
        </p>
        <p class="mb-0">QueryString pairs: <%=Request.QueryString.ToString().Replace("&",", ") %></p>
      </div>
    </div>
    <hr />
  
<pre>
DNN:         <%=AccuTheme.GetVersion("DotNetNuke") %>
MS DI:       <%=AccuTheme.GetVersion("Microsoft.Extensions.DependencyInjection") %>
MailKit:     <%=AccuTheme.GetVersion("MailKit") %>
Newton:      <%=AccuTheme.GetVersion("Newtonsoft.Json") %>
2sxc:        <%=AccuTheme.GetVersion("ToSic.Sxc") %>
ClosedXML:   <%=AccuTheme.GetVersion("ClosedXML") %> (github.com/ClosedXML)
HtmlToPdf:   <%=AccuTheme.GetVersion("Select.HtmlToPdf") %> (selectpdf.com)
Booya:       <%=AccuTheme.GetVersion("Booya") %> <!-- not found -->
AccuKit:     <%=AccuTheme.GetVersion("AccuKit") %> <!-- not found (yet) -->
AccuTheme:   <%=AccuTheme.Version() %> 
</pre>

    <%-- SMALL PRINT --%>
    <div class="small text-dark">
      <p class="mb-0">
        Using <code><%=System.Configuration.ConfigurationManager.AppSettings["UpdateServiceUrl"] %></code> for updates. 
        Deployed on <%=System.Configuration.ConfigurationManager.AppSettings["InstallationDate"] %> 
        at Dnn version <%=System.Configuration.ConfigurationManager.AppSettings["InstallVersion"] %>,
      </p>
      <p>WAN IP: <%=AccuTheme.GetIpAddress() %>, page output <%=DateTime.Now.ToString("F") %></p>
    </div>

    <p class="small font-weight-bold mt-2 mb-0">Debug info only visible from ASL WAN IP addresses and being output from <code>includes/_footer.ascx</code> in Skin.</p>

  </div>
<% } else { %>
<pre>WAN IP: <%=AccuTheme.GetIpAddress() %></pre>  
<% } %>
