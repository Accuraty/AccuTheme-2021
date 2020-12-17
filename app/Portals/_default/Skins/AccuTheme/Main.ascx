<!--#include file="includes/_preheader.ascx"-->
<!--#include file="includes/_header.ascx"-->

<main class="main" role="main">
  <section class="section">
    <div class="container">
      <!--#include file="includes/_breadcrumb.ascx"-->

      <%-- Don't render any HTML unless the pane has content. --%>
      <% if (ContentPane.Visible == true) { %>
        <div class="row">
          <div
            id="ContentPane"
            class="col-12"
            visible="false"
            runat="server"
          ></div>
        </div>
      <% } %>

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

    </div>
  </section>
</main>

<!--#include file="includes/_footer.ascx"-->
