<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="display: none"
      aria-hidden="true"
    >
      <symbol id="ontario-icon-close">
        <path
          d="M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4z"
          fill=""
        ></path>
      </symbol>
      <symbol id="ontario-icon-menu">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill=""></path>
      </symbol>
    </svg>

    <div class="documentation-only--application">
      <div class="ontario-header__container">
        <header
          class="ontario-application-header ontario-header"
          id="ontario-header"
        >
          <div class="ontario-row">
            <div
              class="
                ontario-columns ontario-small-6
                ontario-application-header__logo
              "
            >
              <a href="https://www.ontario.ca/page/government-ontario">
                <img
                  src="@/src/assets/ontario-logo--desktop.svg"
                  alt="Government of Ontario"
                />
              </a>
            </div>
            <div
              class="
                ontario-columns ontario-small-6
                ontario-application-header__lang-toggle
              "
            >
              <a
                href="#"
                class="
                  ontario-header__language-toggler
                  ontario-header-button ontario-header-button--without-outline
                "
              >
                <abbr title="Français" class="ontario-show-for-small-only">
                  FR
                </abbr>
                <span class="ontario-show-for-medium"> Français </span>
              </a>
            </div>
          </div>
        </header>
        <div class="ontario-application-subheader-menu__container">
          <section class="ontario-application-subheader">
            <div class="ontario-row">
              <div
                class="
                  ontario-columns ontario-small-12
                  ontario-application-subheader__container
                "
              >
                <p class="ontario-application-subheader__heading">
                  <a href="/">Vernacular</a>
                </p>

                <div class="ontario-application-subheader__menu-container">
                  <ul
                    class="
                      ontario-application-subheader__menu
                      ontario-show-for-large
                    "
                  >
                    <li><a href="/search">Search Acronym</a></li>
                    <li><a href="/create">Create Acronym</a></li>
                    <li><a href="/list">Dictionary</a></li>
                  </ul>
                  <ul
                    class="
                      ontario-application-subheader__menu
                      ontario-hide-for-small
                      ontario-show-for-medium
                      ontario-hide-for-large
                    "
                  >
                    <li><a href="/search">Search Acronym</a></li>
                    <li><a href="/create">Create Acronym</a></li>
                  </ul>

                  <button
                    class="
                      ontario-header__menu-toggler
                      ontario-header-button ontario-header-button--with-outline
                    "
                    id="ontario-header-menu-toggler"
                    aria-controls="ontario-navigation"
                    aria-label="open menu"
                    type="button"
                  >
                    <svg
                      class="ontario-icon"
                      focusable="false"
                      viewBox="0 0 24 24"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <use href="#ontario-icon-menu"></use>
                    </svg>
                    <span>Menu</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <nav class="ontario-navigation" id="ontario-navigation">
            <button
              class="
                ontario-header__menu-toggler
                ontario-header-button ontario-header-button--with-outline
              "
              id="ontario-header-nav-toggler"
              aria-controls="ontario-navigation"
              aria-label="close"
            >
              <svg
                class="ontario-icon"
                focusable="false"
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
              >
                <use href="#ontario-icon-close"></use>
              </svg>
              <span>Menu</span>
            </button>
            <div class="ontario-navigation__container">
              <ul>
                <li class="ontario-show-for-small-only">
                  <a href="/search">Search Acronym</a>
                </li>
                <li class="ontario-show-for-small-only">
                  <a href="/create">Create Acronym</a>
                </li>
                <li class="ontario-hide-for-large">
                  <a href="/list">Dictionary</a>
                </li>
                <li class="ontario-hide-for-large">
                  <a href="#">Coming Soon</a>
                </li>
                <li class="ontario-hide-for-large"><a href="#">Link 5</a></li>
                <li><a href="#">Link 6</a></li>
                <li><a href="#">Link 7</a></li>
                <li><a href="#">Link 8</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div class="ontario-overlay"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

function addA11y(element) {
  element.setAttribute("aria-hidden", true);
}

function removeA11y(element) {
  element.removeAttribute("aria-hidden");
}

function addA11yVisibility(element) {
  element.setAttribute("aria-hidden", false);
  element.setAttribute("tabindex", -1);
}

function removeA11yVisibility(element) {
  element.setAttribute("aria-hidden", true);
  element.removeAttribute("tabindex");
}

// keyboard utility to Trap focus
function focusUser(config) {
  if (!config) {
    throw new Error("Unable to initialize focus-trapping - missing config");
  }
  var element = config.element,
    escapeCallback = config.callbackOnEscape;

  if (escapeCallback && !(escapeCallback instanceof Function)) {
    throw new Error(
      "Unable to initialize focus-trapping -  callback is not a function"
    );
  }

  var focusableElements = element.querySelectorAll(
    "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, [tabindex='0'], [contenteditable]"
  );
  var keyboardHandler;

  if (focusableElements.length > 0) {
    var firstFocusableElement = focusableElements[0],
      lastFocusableElement = focusableElements[focusableElements.length - 1];

    firstFocusableElement.focus();

    keyboardHandler = function keyboardHandler(e) {
      if (e.key === "Escape" || e.keyCode === KEYCODE.ESCAPE) {
        return escapeCallback();
      }

      if (e.key === "Tab" || e.keyCode === KEYCODE.TAB) {
        if (e.shiftKey && document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        } else if (
          !e.shiftKey &&
          document.activeElement === lastFocusableElement
        ) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    };
    element.addEventListener("keydown", keyboardHandler);
  }

  return function cleanUpEventListener() {
    if (keyboardHandler) {
      element.removeEventListener("keydown", keyboardHandler);
    }
  };
}

// run asynchronously
function deferInFn(fn) {
  if (typeof fn === "function") setTimeout(fn, 0);
}

onMounted(() => {
  const navPanelSelector = "ontario-navigation";
  const isReadyClass = "ontario-navigation--is-ready";
  const isActiveClass = "ontario-navigation--open";
  const mobileMenuActiveClass = "ontario-navigation--open";

  var header = document.getElementById("ontario-header"),
    nav = document.getElementById(navPanelSelector),
    openBttnToggler = document.getElementById("ontario-header-menu-toggler"),
    closeBttnToggler = document.getElementById("ontario-header-nav-toggler"),
    body = document.getElementsByTagName("body")[0];

  var currentTogger = null,
    currentDomEl = null;

  function showNavPanel(navpanel) {
    body.classList.add(mobileMenuActiveClass);
    header.parentNode.classList.add(isActiveClass);
    navpanel.scrollTop = 0;

    navpanel.classList.add("ontario-navigation--open");

    addA11yVisibility(navpanel);

    focusUser({
      element: navpanel,
      callbackOnEscape: hideNavPanel,
    });
    deferInFn(unbindOpenBttnToggler);

    // bind clickables: document, closebttn - asynchronously
    deferInFn(bindDocumentKeydown);
    deferInFn(bindDocumentClick);
    deferInFn(bindCloseBttnToggler);
  }

  function hideNavPanel(navpanel, returnToToggler) {
    var navpanelDomEl = navpanel ? navpanel : currentDomEl;
    var returnFocusToToggler = returnToToggler !== undefined;

    body.classList.remove(mobileMenuActiveClass);
    header.parentNode.classList.remove(isActiveClass);

    var navigation = navpanelDomEl.querySelector(".ontario-navigation")
      ? navpanelDomEl.querySelector(".ontario-navigation")
      : navpanelDomEl;

    navpanelDomEl
      .querySelector(".ontario-navigation")
      .classList.remove("ontario-navigation--open");

    removeA11yVisibility(navigation);

    // unbind clickables: document, closebttn
    unbindCloseBttnToggler();
    unbindDocumentClick();
    unbindDocumentKeydown();

    bindOpenBttnToggler();

    // return focus to toggler
    if (returnFocusToToggler) {
      currentTogger.focus();
      currentTogger = null;
    }
  }

  function openMenu(e) {
    var navpanelId = e.currentTarget.getAttribute("aria-controls");
    var navpanel = document.getElementById(navpanelId);

    if (currentDomEl) {
      hideNavPanel(currentDomEl, false);
    }
    currentTogger = e.currentTarget;
    currentDomEl = document.querySelector(".ontario-header__container");
    showNavPanel(navpanel);
  }

  function closeMenu() {
    hideNavPanel(currentDomEl);
  }

  function onClickHandler(e) {
    var isNavPanel = e.target === currentDomEl;
    var isElementInsideNav = currentDomEl.contains(e.target);
    if (!isNavPanel && !isElementInsideNav) hideNavPanel();
  }

  function onKeyboardHandler(e) {
    if (e.key === "Escape" || e.keyCode === KEYCODE.ESCAPE) hideNavPanel();
  }

  //  bind-unbind events
  function bindOpenBttnToggler() {
    openBttnToggler.addEventListener("click", openMenu);
  }

  function unbindOpenBttnToggler() {
    openBttnToggler.removeEventListener("click", openMenu);
  }

  function bindCloseBttnToggler() {
    closeBttnToggler.addEventListener("click", closeMenu);
  }

  function unbindCloseBttnToggler() {
    closeBttnToggler.removeEventListener("click", closeMenu);
  }

  function bindDocumentClick() {
    document.addEventListener("click", onClickHandler);
  }

  function unbindDocumentClick() {
    document.removeEventListener("click", onClickHandler);
  }

  function bindDocumentKeydown() {
    document.addEventListener("keydown", onKeyboardHandler);
  }

  function unbindDocumentKeydown() {
    document.removeEventListener("keydown", onKeyboardHandler);
  }

  function init() {
    addA11y(nav);
    bindOpenBttnToggler(nav);
    nav.classList.add(isReadyClass);
  }

  init();
});
</script>
