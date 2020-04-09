<div class="nav nav-tabs" id="nav-tab" role="tablist">
  <a
    onClick={() => this.handleFilter("all")}
    class="nav-item nav-link text-reset font-weight-bold active"
    id="nav-home-tab"
    data-toggle="tab"
    href="#nav-home"
    role="tab"
    aria-controls="nav-home"
    aria-selected="true"
  >
    All
  </a>
  <a
    onClick={() => this.handleFilter("react")}
    class="nav-item nav-link text-reset font-weight-bold "
    id="nav-home-tab"
    data-toggle="tab"
    href="#nav-home"
    role="tab"
    aria-controls="nav-home"
    aria-selected="true"
  >
    React
  </a>
  <a
    onClick={() => this.handleFilter("js")}
    class="nav-item nav-link text-reset font-weight-bold"
    id="nav-profile-tab"
    data-toggle="tab"
    href="#nav-profile"
    role="tab"
    aria-controls="nav-profile"
    aria-selected="false"
  >
    JavaScript
  </a>
  <a
    onClick={() => this.handleFilter("html")}
    class="nav-item nav-link text-reset font-weight-bold"
    id="nav-contact-tab"
    data-toggle="tab"
    href="#nav-contact"
    role="tab"
    aria-controls="nav-contact"
    aria-selected="false"
  >
    HTML & CSS
  </a>
</div>;
