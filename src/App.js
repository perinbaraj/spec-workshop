(function () {
  "use strict";

  const views = window.DashboardViews = {};

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function detail(label, value) {
    const row = element("p");
    row.append(element("strong", "", label + ": "), document.createTextNode(String(value)));
    return row;
  }

  window.DashboardUI = { element, detail };

  document.addEventListener("DOMContentLoaded", function () {
    const main = document.getElementById("app-main");
    const buttons = Array.from(document.querySelectorAll("[data-view]"));
    const select = document.getElementById("member-select");
    const custom = document.getElementById("custom-member");
    const memberError = document.getElementById("member-error");
    let activeView = "profile";
    let generation = 0;

    async function render() {
      const request = ++generation;
      buttons.forEach((button) => {
        const active = button.dataset.view === activeView;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      main.setAttribute("aria-busy", "true");
      main.replaceChildren(element("p", "loading", "Loading..."));
      try {
        const content = await views[activeView]();
        if (request === generation) main.replaceChildren(content);
      } catch {
        if (request === generation) {
          const error = element("p", "error", "Unable to load this view. Please try again.");
          error.setAttribute("role", "alert");
          main.replaceChildren(error);
        }
      } finally {
        if (request === generation) main.setAttribute("aria-busy", "false");
      }
    }

    function selectMember(id) {
      window.memberService.setMemberId(id);
      const current = window.memberService.getMemberId();
      select.value = Array.from(select.options).some((option) => option.value === current) ? current : "";
      custom.value = current;
      memberError.textContent = "";
      render();
    }

    buttons.forEach((button) => button.addEventListener("click", function () {
      activeView = button.dataset.view;
      render();
    }));
    select.addEventListener("change", function () { selectMember(select.value); });
    document.getElementById("member-form").addEventListener("submit", function (event) {
      event.preventDefault();
      if (!custom.value.trim()) {
        memberError.textContent = "Enter a member ID.";
        return;
      }
      selectMember(custom.value);
    });

    custom.value = window.memberService.getMemberId();
    render();
  });
}());
