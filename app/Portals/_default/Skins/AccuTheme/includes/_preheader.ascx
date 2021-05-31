<!--#include file="_registers.ascx"-->




<%-- Meta tags
================================================== --%>

<%@ Register TagPrefix="accu" TagName="MetaTags" src="../controls/meta.ascx" %>
<accu:MetaTags runat="server" />




<%-- Stylesheets

CSS priorities and suggested order (note that * denotes a core DNN file):

  1.    Font API links (e.g., Google Fonts, Typekit)
  5.    Default CSS*
  6-9.  Vendor CSS (e.g., Bootstrap)
  10.   Module CSS*
  15.   Skin CSS*
  16.   Custom CSS: `public/YOUR_FILE_HERE`
  20.   Specific Skin CSS
  25.   Container CSS*
  30.   Specific Container CSS*
  35.   Portal CSS*

Reference: http://www.dnnsoftware.com/wiki/client-resource-management-api
========================================================================== --%>

<%-- YOU CAN DELETE THIS FROM A NEW PROJECT

  I'd love to remove the `default.css` stylesheet, but many of the styles are
  used for DNN edit controls. Probably going to leave it as is (and continue
  overriding these styles) instead of writing them from scratch. But keeping
  this tag here for reference just in case.

  <dnn:DnnCssExclude Name="dnndefault" runat="server" />
--%>

<%-- STYLESHEET FROM A CDN

--%>
<%--
<dnn:DnnCssInclude
  FilePath="URL_TO_YOUR_FILE_HERE"
  Priority="1"
  runat="server"
/>
--%>

<%-- STYLESHEET FROM THE SKIN DIRECTORY
<dnn:DnnCssInclude
  FilePath="public/YOUR_FILE_HERE"
  PathNameAlias="SkinPath"
  Priority="16"
  runat="server"
/>
--%>




<%-- Scripts

JS priorities and suggested order (note that * denotes a core DNN file):

  5.    jQuery*
  10.   jQuery UI*
  100.  Default*
  101.  Runtime: Code needed for Webpack to execute
  102.  Vendors: Node modules (bundled by Webpack)
  103.  Skin: Global scripts (bundle by Webpack)

Reference: http://www.dnnsoftware.com/wiki/client-resource-management-api
========================================================================== --%>

<%-- SCRIPT WITH ASYNC AND DEFER FROM A CDN
<dnn:DnnJsInclude
  FilePath="URL_TO_FILE_HERE.js"
  Priority="100"
  HtmlAttributesAsString="async:async,defer:defer"
  runat="server"
/>
--%>
<%-- RESULT:
<script src="URL_TO_FILE_HERE.js" async="async" defer="defer" type="text/javascript"></script>

Reference: https://dnndocs.com/content/tutorials/client-resources/index.html#additional-attributes
========================================================================== --%>

<dnn:DnnJsInclude
  FilePath="dist/runtime.bundle.js"
  PathNameAlias="SkinPath"
  ForceProvider="DnnFormBottomProvider"
  Priority="101"
  runat="server"
/>

<dnn:DnnJsInclude
  FilePath="dist/vendors.bundle.js"
  PathNameAlias="SkinPath"
  ForceProvider="DnnFormBottomProvider"
  Priority="102"
  runat="server"
/>

<% 
if ( AccuTheme.skinFileExists(AccuTheme.SkinJsPath, "common.bundle.js") ) 
{ 
  ClientResourceManager.RegisterScript(
    this.Page, 
    AccuTheme.SkinJsPath + "/" + "common.bundle.js", 
    103,
    "DnnFormBottomProvider"
  );
}
%>
<%--
<dnn:DnnJsInclude
  FilePath="dist/common.bundle.js"
  PathNameAlias="SkinPath"
  ForceProvider="DnnFormBottomProvider"
  Priority="103"
  runat="server"
/>
--%>

<dnn:DnnJsInclude
  FilePath="dist/Skin.bundle.js"
  PathNameAlias="SkinPath"
  ForceProvider="DnnFormBottomProvider"
  Priority="104"
  runat="server"
/>
