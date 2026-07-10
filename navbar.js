/* =========================================================
   NAVBAR.JS
   Injects the shared header/nav markup into a placeholder
   element, then wires up the dark/light theme toggle.

   USAGE — put this in every page:
     1. Add  <div id="navbar-placeholder"></div>  right after <body>
     2. Add  <link rel="stylesheet" href="navbar.css">  in <head>
     3. Add  <script src="navbar.js" defer></script>     before </body>

   Edit the NAVBAR_HTML template below and the change shows
   up on every page automatically — no need to touch each
   .html file again.
   ========================================================= */

(function () {
  // ---- 1. Apply saved theme immediately (before paint) to avoid a flash ----
  const savedTheme = localStorage.getItem("dashmindsiq-theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  const NAVBAR_HTML = `
    <header>
      <nav>
        <div class="logo">
          <div class="mark"><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M3 17L9 11L13 15L21 6" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          DashmindsIQ<span class="iq">Marketing</span>
        </div>
        <div class="nav-links">
          <a href="index.html#top">Home</a>
          <div class="nav-item">
            <a href="services.html">Services</a>
            <div class="nav-dropdown">
              <div class="nav-dropdown-inner">
                <div>
                  <div class="dd-group-title">Whom we help</div>
                  <div class="dd-list">
                    <a href="index.html#services">B2B marketing</a>
                    <a href="index.html#services">B2C marketing</a>
                    <a href="index.html#services">D2C / Ecommerce</a>
                  </div>
                </div>
                <div class="dd-divider"></div>
                <div>
                  <div class="dd-group-title">What we do</div>
                  <div class="dd-subcols">
                    <div>
                      <div class="dd-title">Get found</div>
                      <div class="dd-list">
                        <a href="seo.html">SEO</a>
                        <a href="content_marketing.html">Content marketing</a>
                        <a href="paid_media.html">Paid media</a>
                        <a href="pr.html">PR &amp; outreach</a>
                      </div>
                    </div>
                    <div>
                      <div class="dd-title">Engage &amp; convert</div>
                      <div class="dd-list">
                        <a href="social_media.html">Social media</a>
                        <a href="email_marketing.html">Email marketing</a>
                        <a href="marketing_automation.html">Marketing automation</a>
                        <a href="conversion_optimization.html">Conversion optimization</a>
                        <a href="influencer_marketing.html">Influencer marketing</a>
                      </div>
                    </div>
                    <div>
                      <div class="dd-title">Build the brand</div>
                      <div class="dd-list">
                        <a href="branding_creative.html">Branding &amp; creative</a>
                        <a href="web_design.html">Web design</a>
                        <a href="video_production.html">Video production</a>
                        <a href="analytics_reporting.html">Analytics &amp; reporting</a>
                        <a href="marketing_strategy.html">Marketing strategy</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="aboutus.html">Why Us</a>
          <div class="nav-item">
            <a href="industries.html">Industries &amp; Insights</a>
            <div class="nav-dropdown" style="width:max-content;">
              <div class="nav-dropdown-inner" style="display:block; width:max-content; min-width:0;">
                <div>
                  <div class="dd-group-title">Browse by industry</div>
                  <div class="dd-subcols" style="width:max-content;">
                    <div>
                      <div class="dd-list">
                        <a href="saas.html">SaaS &amp; Technology</a>
                        <a href="fintech.html">Fintech &amp; Financial Services</a>
                        <a href="retail.html">Retail &amp; Ecommerce</a>
                      </div>
                    </div>
                    <div>
                      <div class="dd-list">
                        <a href="healthcare.html">Healthcare</a>
                        <a href="real_estate.html">Real Estate</a>
                        <a href="professional_services.html">Professional Services</a>
                      </div>
                    </div>
                    <div>
                      <div class="dd-list">
                        <a href="education.html">Education</a>
                        <a href="hospitality.html">Hospitality</a>
                        <a href="manufacturing.html">Manufacturing</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="index.html#clients">Clients</a>
        </div>
        <button class="theme-toggle" id="theme-toggle" aria-label="Toggle light and dark mode">
          <span class="ttrack">
            <span class="ticon">☾</span>
            <span class="ticon">☀</span>
            <span class="tthumb"></span>
          </span>
        </button>
      </nav>
    </header>
  `;

  function initNavbar() {
    const placeholder = document.getElementById("navbar-placeholder");
    if (!placeholder) {
      console.warn(
        "navbar.js: no #navbar-placeholder element found on this page.",
      );
      return;
    }
    placeholder.outerHTML = NAVBAR_HTML;

    // ---- 2. Wire up theme toggle ----
    const root = document.documentElement;
    const themeBtn = document.getElementById("theme-toggle");
    themeBtn.addEventListener("click", () => {
      const isLight = root.getAttribute("data-theme") === "light";
      const newTheme = isLight ? "dark" : "light";
      root.setAttribute("data-theme", newTheme);
      localStorage.setItem("dashmindsiq-theme", newTheme);
      themeBtn.setAttribute("aria-pressed", String(!isLight));
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavbar);
  } else {
    initNavbar();
  }
})();
