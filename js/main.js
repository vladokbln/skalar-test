$(document).ready(function(){function e(){$(".mobile-menu").removeClass("is-active")}svg4everybody(),$(document).on("click",".catalog-nav__header",function(){$(this).closest(".catalog-nav").toggleClass("is-active"),e()}),$(document).on("click",function(e){!e.target.closest(".catalog-nav__header")&&$(".catalog-nav").hasClass("is-active")&&$(".catalog-nav").removeClass("is-active")}),$(document).on("click",".sidebar__header",function(){$(this).closest(".sidebar__item").toggleClass("is-active")}),$(document).on("click",".sidebar-btn__all",function(){$(this).closest(".sidebar__content").toggleClass("is-active")}),$(document).on("click",".view-mode__item",function(){$(".view-mode__item").removeClass("is-active"),$(this).addClass("is-active")}),$(document).on("click",".sorter__item",function(){$(".sorter__item").removeClass("is-active"),$(this).addClass("is-active")}),$(".mobile-menu__sandwich").on("click",function(){$(".mobile-menu").addClass("is-active"),$(".mobile-menu__overlay").addClass("is-active"),$("body").addClass("overflowed")}),$(".mobile-menu__overlay").on("click",function(){$(this).removeClass("is-active"),$("body").removeClass("overflowed"),e()}),$("select").selectize()}),document.addEventListener("DOMContentLoaded",function(){var s=document.getElementById("filter-price"),i=[document.getElementById("filter-price__min"),document.getElementById("filter-price__max")];noUiSlider.create(s,{start:[38.72,971.62],connect:!0,margin:100,format:wNumb({decimals:2,prefix:"$ "}),range:{min:[0],max:1e3}}),s.noUiSlider.on("update",function(e,t){i[t].value=e[t]}),i.forEach(function(e,i){e.addEventListener("change",function(){s.noUiSlider.setHandle(i,this.value)}),e.addEventListener("keydown",function(e){var t=s.noUiSlider.get();Number(t[i]),s.noUiSlider.steps()[i]})});var e=document.getElementById("sidebar-btn"),t=document.getElementById("sidebar"),a=document.querySelector(".sidebar-overlay"),n=document.querySelector("body");e.addEventListener("click",function(){t.closest(".category-sidebar").classList.add("is-active"),a.classList.add("is-active"),n.classList.add("overflowed")}),a.addEventListener("click",function(e){t.closest(".category-sidebar").classList.remove("is-active"),this.classList.remove("is-active"),n.classList.remove("overflowed")})});