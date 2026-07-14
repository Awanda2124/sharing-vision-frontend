var articlesData = [];
var isArticlesLoaded = false;
var currentStatus = "publish";

function renderTable(status) {

  var articles = articlesData.filter(function (article) {
    return article.status === status;
  });

  var tbody = $("#article-table-body");
  var rows = "";

  if (articles.length === 0) {

    var emptyMessage = "No articles found.";

    if (status === "thrash") {
      emptyMessage = "No trashed articles found.";
    }

    rows =
      '<tr>' +
      '<td colspan="3" class="text-center text-muted">' +
      emptyMessage +
      '</td>' +
      '</tr>';

  } else {

    $.each(articles, function (_, article) {

      rows +=
        "<tr>" +

        "<td>" + article.title + "</td>" +

        "<td>" + article.category + "</td>" +

        '<td class="text-nowrap">' +

        '<a href="edit.html?id=' + article.id + '" class="action-icon text-primary me-2">' +
        '<i class="fa fa-edit"></i>' +
        '</a>' +

        '<button type="button" class="btn btn-link text-danger p-0 btn-trash" data-id="' + article.id + '">' +
        '<i class="fa fa-trash"></i>' +
        '</button>' +

        "</td>" +

        "</tr>";

    });

  }

  tbody.html(rows);

}

function loadArticles() {

  API.getArticles(10, 0)

    .done(function (response) {

      articlesData = response || [];

      isArticlesLoaded = true;

      renderTable(currentStatus);

    })

    .fail(function (xhr) {

      var message = "Failed to load articles.";

      if (xhr.responseJSON && xhr.responseJSON.message) {
        message = xhr.responseJSON.message;
      }

      alert(message);

    });

}

$(document).ready(function () {

  renderNavbar("dashboard");

  loadArticles();

  $("#status-tabs button").on("click", function () {

    $("#status-tabs button")
      .removeClass("active")
      .attr("aria-selected", "false");

    $(this)
      .addClass("active")
      .attr("aria-selected", "true");

    currentStatus = $(this).data("status");

    renderTable(currentStatus);

  });

});

$(document).on("click", ".btn-trash", function () {

  if (!confirm("Move this article to trash?")) {
    return;
  }

  var id = $(this).data("id");

  API.getArticleById(id)

    .done(function (article) {

      article.status = "thrash";

      API.updateArticle(id, article)

        .done(function () {

          alert("Article moved to trash.");

          loadArticles();

        })

        .fail(function () {

          alert("Failed to move article.");

        });

    })

    .fail(function () {

      alert("Failed to load article.");

    });

});