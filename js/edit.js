var articleId = null;

$(function () {

    renderNavbar("dashboard");

    const params = new URLSearchParams(window.location.search);

    articleId = params.get("id");

    if (!articleId) {

        alert("Article ID not found");

        window.location.href = "dashboard.html";

        return;

    }

    loadArticle();

});

function loadArticle() {

    API.getArticleById(articleId)

        .done(function (article) {

            $("#title").val(article.title);

            $("#category").val(article.category);

            $("#content").val(article.content);

        })

        .fail(function () {

            alert("Failed to load article");

            window.location.href = "dashboard.html";

        });

}

function updateArticle(status) {

    var data = {

        title: $("#title").val().trim(),

        category: $("#category").val().trim(),

        content: $("#content").val().trim(),

        status: status

    };

    if (data.title == "") {

        alert("Title is required");

        return;

    }

    if (data.category == "") {

        alert("Category is required");

        return;

    }

    if (data.content == "") {

        alert("Content is required");

        return;

    }

    API.updateArticle(articleId, data)

        .done(function () {

            alert("Article updated successfully");

            window.location.href = "dashboard.html";

        })

        .fail(function (xhr) {

            if (xhr.responseJSON) {

                alert(JSON.stringify(xhr.responseJSON));

            } else {

                alert("Failed update article");

            }

        });

}

$("#btnPublish").click(function () {

    updateArticle("publish");

});

$("#btnDraft").click(function () {

    updateArticle("draft");

});