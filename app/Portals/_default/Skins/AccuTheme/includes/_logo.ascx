<%--
  This is abstracted to its own include so it can be reused. By default, it
  is included in `_header.ascx` and `_footer.ascx`. We prefer to use SVG files
  for logos not only because vectors are better, but also because that allows
  us to target them via CSS to change attributes like size and color.
  --%>
<%-- 1. Generally we should do it the Dnn-way first, 
     note that around Dnn 9.4 they added the InjectSvg option 
MPORTANT: using this version requires changing _header.ascx so we 
are not already wrapped in an A tag (since Dnn emits one)
<dnn:LOGO 
  ID="dnnLOGO"
  CssClass="img-fluid" 
  LinkCssClass="" 
  InjectSvg="true" 
  runat="server"  
/>
--%>
<%-- 2. hard-coded IMG tag, still using Dnn Settings
<img
  class="img-fluid"
  src="<%=PortalSettings.HomeDirectory %><%=PortalSettings.LogoFile %>"
  alt="_xx___CLIENT_NAME___xx_"
/> 
--%>

<%-- 3. By default just include the AccuTheme SVG --%>
<!--#include file="../dist/media/svg/AccuTheme-logo.svg"-->
