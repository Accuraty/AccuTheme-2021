<div id="skinMain" class="dnn-skin-wrapper skin-main">
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

<!--#include file="includes/_page__pane--Main+Sidebar.ascx"-->

    </div>
  </section>
</main>

<!--#include file="includes/_footer.ascx"-->
</div>
