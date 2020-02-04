// поддежрка подключения svg во всех браузерах
$(document).ready(function() {
  svg4everybody();
  var sandwichClick = function() {
    $(document).on("click", ".catalog-nav__header", function() {
      var sandwich = $(this).find(".sandwich");
      sandwich.toggleClass("is-active");
    });
  };
  $(document).on("click", ".sidebar__header", function() {
    var sidebarItem = $(this).closest(".sidebar__item");
    sidebarItem.toggleClass("is-active");
  });
  $(document).on("click", ".sidebar-btn__all", function() {
    var sidebarContent = $(this).closest(".sidebar__content");
    sidebarContent.toggleClass("is-active");
  });
  $(document).on("click", ".view-mode__item", function() {
    $(".view-mode__item").removeClass("is-active");
    $(this).addClass("is-active");
  });
  $(document).on("click", ".sorter__item", function() {
    $(".sorter__item").removeClass("is-active");
    $(this).addClass("is-active");
  });

  sandwichClick();
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
      // "10%": [10, 10],
      // "50%": [80, 50],
      // "80%": 150,
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
});
