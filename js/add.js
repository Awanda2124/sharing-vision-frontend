$(function () {

    renderNavbar("add");

});


function submitArticle(status) {

    var title = $("#title").val().trim();

    var category = $("#category").val().trim();

    var content = $("#content").val().trim();


    if (title == "") {

        alert("Title is required");

        return;

    }

    if (category == "") {

        alert("Category is required");

        return;

    }

    if (content == "") {

        alert("Content is required");

        return;

    }


    var data = {

        title: title,

        category: category,

        content: content,

        status: status

    };


    API.createArticle(data)

        .done(function () {

            alert("Article created successfully");

            window.location.href = "dashboard.html";

        })

        .fail(function (xhr) {

            if (xhr.responseJSON) {

                alert(JSON.stringify(xhr.responseJSON));

            } else {

                alert("Failed create article");

            }

        });

}


$("#btnPublish").click(function () {

    submitArticle("publish");

});


$("#btnDraft").click(function () {

    submitArticle("draft");

});