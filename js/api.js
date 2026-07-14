var API = {
  BASE_URL: "http://localhost:8080",

  getArticles: function (limit, offset) {
    return $.ajax({
      url: this.BASE_URL + "/article/" + limit + "/" + offset,
      method: "GET",
      dataType: "json"
    });
  },

  createArticle: function (data) {

    return $.ajax({

      url: this.BASE_URL + "/article",

      method: "POST",

      contentType: "application/json",

      data: JSON.stringify(data)

    });
  },

  getArticleById: function (id) {

    return $.ajax({
      url: this.BASE_URL + "/article/" + id,
      method: "GET",
      dataType: "json"
    });

  },

  updateArticle: function (id, data) {

    return $.ajax({
      url: this.BASE_URL + "/article/" + id,
      method: "PUT",
      contentType: "application/json",
      data: JSON.stringify(data)
    });

  },
};

