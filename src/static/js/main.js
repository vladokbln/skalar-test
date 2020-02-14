// поддежрка подключения svg во всех браузерах
$(document).ready(function() {
  svg4everybody();

  $(document).on("click", ".catalog-nav__header", function() {
    var parentElement = $(this).closest(".catalog-nav");
    parentElement.toggleClass("is-active");
    closeMenu();
  });

  $(document).on("click", function(e) {
    if (
      !e.target.closest(".catalog-nav__header") &&
      $(".catalog-nav").hasClass("is-active")
    ) {
      $(".catalog-nav").removeClass("is-active");
    }
  });

  $(document).on("click", ".sidebar__header", function() {
    var parentElement = $(this).closest(".sidebar__item");
    parentElement.toggleClass("is-active");
  });
  $(document).on("click", ".sidebar-btn__all", function() {
    var parentElement = $(this).closest(".sidebar__content");
    parentElement.toggleClass("is-active");
  });
  $(document).on("click", ".view-mode__item", function() {
    $(".view-mode__item").removeClass("is-active");
    $(this).addClass("is-active");
  });
  $(document).on("click", ".sorter__item", function() {
    $(".sorter__item").removeClass("is-active");
    $(this).addClass("is-active");
  });

  $(".mobile-menu__sandwich").on("click", function() {
    $(".mobile-menu").addClass("is-active");
    $(".mobile-menu__overlay").addClass("is-active");
    $("body").addClass("overflowed");
  });
  $(".mobile-menu__overlay").on("click", function() {
    $(this).removeClass("is-active");
    $("body").removeClass("overflowed");
    closeMenu();
  });
  function closeMenu() {
    $(".mobile-menu").removeClass("is-active");
  }

  $("select").selectize();
});

document.addEventListener("DOMContentLoaded", function() {
  var stepsSlider = document.getElementById("filter-price");
  var inputMin = document.getElementById("filter-price__min");
  var inputMax = document.getElementById("filter-price__max");
  var inputs = [inputMin, inputMax];

  noUiSlider.create(stepsSlider, {
    start: [38.72, 971.62],
    connect: true,
    margin: 100,
    format: wNumb({
      decimals: 2,
      prefix: "$ "
    }),
    range: {
      min: [0],
      max: 1000
    }
  });
  stepsSlider.noUiSlider.on("update", function(values, handle) {
    inputs[handle].value = values[handle];
  });
  // Listen to keydown events on the input field.
  inputs.forEach(function(input, handle) {
    input.addEventListener("change", function() {
      stepsSlider.noUiSlider.setHandle(handle, this.value);
    });
    input.addEventListener("keydown", function(e) {
      var values = stepsSlider.noUiSlider.get();
      var value = Number(values[handle]);
      // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
      var steps = stepsSlider.noUiSlider.steps();
      // [down, up]
      var step = steps[handle];
      var position;
    });
  });

  // sidebar
  var btnSidebar = document.getElementById("sidebar-btn");
  var sidebar = document.getElementById("sidebar");
  var sidebarOverlay = document.querySelector(".sidebar-overlay");
  var bodyItem = document.querySelector("body");

  btnSidebar.addEventListener("click", function() {
    sidebar.closest(".category-sidebar").classList.add("is-active");
    sidebarOverlay.classList.add("is-active");
    bodyItem.classList.add("overflowed");
  });
  sidebarOverlay.addEventListener("click", function(e) {
    sidebar.closest(".category-sidebar").classList.remove("is-active");
    this.classList.remove("is-active");
    bodyItem.classList.remove("overflowed");
  });
});
