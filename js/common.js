// function renderNavbar(activePage) {
//   var pages = {
//     dashboard: { label: "Dashboard", href: "dashboard.html" },
//     add: { label: "Add New", href: "add.html" },
//     preview: { label: "Preview", href: "preview.html" }
//   };

//   var navItems = "";

//   $.each(pages, function (key, page) {
//     var isActive = key === activePage ? " active" : "";
//     navItems +=
//       '<li class="nav-item">' +
//       '<a class="nav-link' + isActive + '" href="' + page.href + '">' + page.label + "</a>" +
//       "</li>";
//   });

//   var navbarHtml =
//     '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">' +
//     '<div class="container">' +
//     '<a class="navbar-brand" href="dashboard.html">Sharing Vision</a>' +
//     '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">' +
//     '<span class="navbar-toggler-icon"></span>' +
//     "</button>" +
//     '<div class="collapse navbar-collapse" id="mainNavbar">' +
//     '<ul class="navbar-nav ms-auto">' +
//     navItems +
//     "</ul>" +
//     "</div>" +
//     "</div>" +
//     "</nav>";

//   $("#navbar-container").html(navbarHtml);
// }

function renderNavbar(activePage) {
  var pages = {
    dashboard: { label: "Dashboard", href: "dashboard.html" },
    add: { label: "Add New Article", href: "add.html" },
    preview: { label: "Preview", href: "preview.html" }
  };

  var navItems = "";

  $.each(pages, function (key, page) {
    var isActive = key === activePage ? " active" : "";
    navItems +=
      '<li class="nav-item">' +
      '<a class="nav-link' + isActive + '" href="' + page.href + '">' + page.label + "</a>" +
      "</li>";
  });

  var sidebarHtml =
    '<nav class="sidebar bg-dark navbar-dark">' +
    '<a class="navbar-brand d-block" href="dashboard.html">Sharing Vision</a>' +
    '<button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">' +
    '<span class="navbar-toggler-icon"></span>' +
    "</button>" +
    '<div class="collapse navbar-collapse" id="mainNavbar">' +
    '<ul class="nav flex-column sidebar-nav">' +
    navItems +
    "</ul>" +
    "</div>" +
    "</nav>";

  $("#navbar-container").html(sidebarHtml);
}