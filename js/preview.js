var articles = [];

var currentPage = 1;

var pageSize = 3;

$(function () {

    renderNavbar("preview");

    loadArticles();

});

function loadArticles() {

    API.getArticles(100, 0)

        .done(function (response) {

            articles = response.filter(function (item) {

                return item.status === "publish";

            });

            renderPage(1);

        })

        .fail(function () {

            alert("Failed load articles.");

        });

}

function renderPage(page) {

    currentPage = page;

    var start = (page - 1) * pageSize;

    var end = start + pageSize;

    var list = articles.slice(start, end);

    var html = "";

    $.each(list, function (_, article) {

        html +=

            '<div class="col-md-4 mb-4">' +

            '<div class="card h-100 shadow-sm">' +

            '<div class="card-body">' +

            '<h5 class="card-title">' +

            article.title +

            '</h5>' +

            '<span class="badge bg-primary mb-3">' +

            article.category +

            '</span>' +

            '<p class="card-text">' +

            article.content.substring(0, 200) +

            '...' +

            '</p>' +

            '</div>' +

            '</div>' +

            '</div>';

    });

    $("#preview-list").html(html);

    renderPagination();

}

function renderPagination() {

    var totalPages = Math.ceil(articles.length / pageSize);

    var html = "";

    html +=

        '<li class="page-item ' +

        (currentPage == 1 ? "disabled" : "") +

        '">' +

        '<a class="page-link" href="#" data-page="' +

        (currentPage - 1) +

        '">Previous</a></li>';

    for (var i = 1; i <= totalPages; i++) {

        html +=

            '<li class="page-item ' +

            (i == currentPage ? "active" : "") +

            '">' +

            '<a class="page-link" href="#" data-page="' +

            i +

            '">' +

            i +

            "</a></li>";

    }

    html +=

        '<li class="page-item ' +

        (currentPage == totalPages ? "disabled" : "") +

        '">' +

        '<a class="page-link" href="#" data-page="' +

        (currentPage + 1) +

        '">Next</a></li>';

    $("#pagination").html(html);

}

$(document).on("click", "#pagination a", function (e) {

    e.preventDefault();

    var page = parseInt($(this).data("page"));

    var totalPages = Math.ceil(articles.length / pageSize);

    if (page < 1 || page > totalPages) return;

    renderPage(page);

});