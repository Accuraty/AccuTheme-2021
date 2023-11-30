<div id="skinAuth" class="dnn-skin-wrapper skin-auth">
<!--#include file="includes/_preheader.ascx"-->
<!--#include file="includes/_header.ascx"-->

<dnn:DnnJsInclude
  FilePath="dist/Authentication.bundle.js"
  PathNameAlias="SkinPath"
  ForceProvider="DnnFormBottomProvider"
  Priority="106"
  runat="server"
/>

<main
  class="main"
  role="main"
  id="authentication"
  data-component="DnnAuthForm"
>
  <section class="section">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="auth-form p-3 my-3 mx-auto bg-white p-md-4 my-md-5" data-authentication-form>
            <div
              id="HeaderPane"
              class="auth-form__header mb-4"
              visible="false"
              runat="server"
            ></div>
            <div
              id="ContentPane"
              class="auth-form__content"
              visible="false"
              runat="server"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<!--#include file="includes/_footer.ascx"-->
</div>
