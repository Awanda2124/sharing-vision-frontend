var API = {
  BASE_URL: "https://sharing-vision-backend-production.up.railway.app",

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

