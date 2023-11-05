<%-- Don't render any HTML unless at least one pane has content. --%>
<% if (MainPane.Visible == true || SidebarPane.Visible == true) { %>
  <div class="row">
    <div
      id="MainPane"
      class="col-md-8  mb-5 mb-md-0"
      visible="false"
      runat="server"
    ></div>
    <div
      id="SidebarPane"
      class="col-md-4 col-xl-3 offset-xl-1"
      visible="false"
      runat="server"
    ></div>
  </div>
<% } %>
