<footer class="footer  bg-dark text-light py-4 py-md-5" role="contentinfo">
  <div class="container">
    <div class="row">

      <%-- LOGO --%>
      <div class="footer__brand  col-12">
        <a
          class="d-inline-block text-decoration-none mb-4 mb-md-5"
          href="/"
          aria-label="_xx___WEBSITE_NAME___xx_">
          <!--#include file="_logo.ascx"-->
        </a>
      </div>

      <%-- NAV MENUS --%>
      <div class="footer__nav  col-12 col-md-8">
        <div class="row">
          <div class="col-6 col-md-4">
            <dl class="mb-4">
              <dt>
                <a href="#" class="d-inline-block py-1">Projects</a>
              </dt>
              <dd class="mb-0">
                <a class="d-inline-block py-1" href="#">Item One</a>
              </dd>
              <dd class="mb-0">
                <a class="d-inline-block py-1" href="#">Item Two</a>
              </dd>
              <dd class="mb-0">
                <a class="d-inline-block py-1" href="#">Item Three</a>
              </dd>
              <dd class="mb-0">
                <a class="d-inline-block py-1" href="#">Item Four</a>
              </dd>
            </dl>
          </div>
          <div class="col-6 col-md-4">
            <dl class="mb-4">
              <dt>
                <a href="#" class="d-inline-block py-1">Resources</a>
              </dt>
              <dd class="mb-0">
                <a class="d-inline-block py-1" href="#">Item One</a>
              </dd>
              <dd class="mb-0">
                <a class="d-inline-block py-1" href="#">Item Two</a>
              </dd>
              <dd class="mb-0">
                <a class="d-inline-block py-1" href="#">Item Three</a>
              </dd>
              <dd class="mb-0">
                <a class="d-inline-block py-1" href="#">Item Four</a>
              </dd>
              <dd class="mb-0">
                <a class="d-inline-block py-1" href="#">Item Five</a>
              </dd>
              <dd class="mb-0">
                <a class="d-inline-block py-1" href="#">Item Six</a>
              </dd>
            </dl>
          </div>
          <div class="col-6 col-md-4">
            <dl class="mb-4">
              <dt>
                <a href="#" class="d-inline-block py-1">Company</a>
              </dt>
              <dd class="mb-0">
                <a class="d-inline-block py-1" href="#">Item One</a>
              </dd>
              <dd class="mb-0">
                <a class="d-inline-block py-1" href="#">Item One</a>
              </dd>
            </dl>

            <dl class="mb-4" itemscope itemtype="http://schema.org/Organization">
              <dt>
                <span class="d-inline-block py-1">Social</span>
              </dt>
              <dd class="mb-0">
                <a class="d-inline-flex align-items-center py-1" target="_blank" rel="nofollow noopener noreferrer" itemprop="sameAs" href="#">
                  <span class="d-flex mr-2">
                    <%=AccuKit.AccuIcon("Facebook") %>
                  </span>
                  <span>Facebook</span>
                </a>
              </dd>
              <dd class="mb-0">
                <a class="d-inline-flex align-items-center py-1" target="_blank" rel="nofollow noopener noreferrer" itemprop="sameAs" href="#">
                  <span class="d-flex mr-2">
                    <%=AccuKit.AccuIcon("LinkedIn") %>
                  </span>
                  <span>LinkedIn</span>
                </a>
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <%-- CALL TO ACTION --%>
      <div class="footer__cta  col-12 col-md-4">
        <div class="my-5 my-md-0">
          <label for="newsletterEmail" class="font-weight-bold py-1">Subscribe to our newsletter</label>
          <div class="input-group">
            <input class="form-control" id="newsletterEmail" type="email" placeholder="Email address">
            <div class="input-group-append">
              <button class="btn btn-primary" type="button">Submit</button>
            </div>
          </div>
        </div>
      </div>

      <%-- META: COPYRIGHT --%>
      <div class="footer__meta  col-12 col-md-6 mt-4 mt-md-5">
        <div class="d-flex flex-wrap flex-column flex-md-row">
          <span class="d-inline-block my-1 mr-3"><dnn:COPYRIGHT id="dnnCopyright" runat="server" /></span>
          <span class="d-inline-block my-1 mr-3"><dnn:TERMS id="dnnTerms" runat="server" /></span>
          <span class="d-inline-block my-1"><dnn:PRIVACY id="dnnPrivacy" runat="server" /></span>
        </div>
      </div>

      <%-- META: CREDITS --%>
      <div class="footer__meta  col-12 col-md-6 mt-4 mt-md-5">
        <p class="my-1 text-md-right">Development and hosting by <a href="https://accuraty.com" target="_blank" rel="nofollow noopener noreferrer">Accuraty Solutions</a></p>
      </div>
    </div>
  </div>
</footer>


 <!--#include file="__debug.ascx"-->
