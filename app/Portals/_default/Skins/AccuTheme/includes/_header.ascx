<%-- <%=AccuKit.BootstrapIcon("Star fill") %> --%>
<%-- <%=AccuKit.AccuIcon("Facebook") %> --%>

<header
  class="header bg-light fixed-top"
  role="banner"
  data-component="Header"
  data-component-config='{ "transformOnScroll": true }'
>
  <div class="navbar navbar-expand-lg navbar-light">
    <div class="container px-0">
      <a
        class="navbar-brand position-relative d-flex"
        href="/"
        aria-label="_xx___CLIENT_NAME___xx_"
      >
        <!--#include file="_logo.ascx"-->
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <nav class="collapse navbar-collapse" id="navbarContent" aria-label="Primary navigation" data-component="NavMenu">
        <%-- Site Menu --%>
        <%-- <dnn:MENU
          MenuStyle="menus/SiteMenu"
          IncludeNodes=""
          runat="server"
        ></dnn:MENU> --%>

        <%-- Primary Nav --%>
        <dnn:MENU
          MenuStyle="menus/NavPrimary"
          NodeSelector=""
          IncludeNodes=""
          ExcludeNodes=""
          runat="server"
        ></dnn:MENU>

        <div class="ml-auto my-2 my-lg-0">
          <a class="btn btn-primary" href="#">Contact Us</a>
        </div>
      </nav>
    </div>
  </div>
</header>
