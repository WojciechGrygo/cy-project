describe("Post, Get, Delete Request", () => {

  var bodyOfPosts = new Array();

  var randomBody = Math.random().toString(36).substring(1)
  var randomId = Math.floor(Math.random() * 100 + 1)

  it("Create a new comment", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: {
        body: randomBody,
        postId: randomId
      }
    }).then(response => {
      expect(response.status).to.eq(201)
    })
  });

  it("Locate and assert the new comment", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
      headers: {
        accept: "application/JSON"
      }
    }).then(response => {
      let body = JSON.parse(JSON.stringify(response.body))
      body.forEach(item => {
        bodyOfPosts.push(item["body"])
      });
    }).then(() => {
      let bodyValue = bodyOfPosts[bodyOfPosts.length - 1]
      expect(bodyValue).to.eq("cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut")
    })
  });

  it("Delete the new comment", () => {
    cy.request({
      method: "DELETE",
      url: "https://jsonplaceholder.typicode.com/posts/" + bodyOfPosts.length,
    }).then(response => {
      expect(response.status).to.eq(200)
    })
  });
});
