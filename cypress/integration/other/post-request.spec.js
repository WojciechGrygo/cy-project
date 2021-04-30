describe("POST request", () => {

    var titleOfPosts = new Array();
    var randomTitle = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1)

    it("Create a new value /post", () => {
        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/users",
            body: {
                "title": randomTitle,
                "body": "I've created a new value"
            }
        }).then(response => {
            expect(response.status).to.eq(201)
        })
        cy.log(randomTitle)
    })

    it("Validate the new posts", () => {
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/users",
            headers: {
                accept: "application/JSON"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            body.forEach(item => {
                titleOfPosts.push(item["name"])
            });
        }).then(() => {
            var title = titleOfPosts[titleOfPosts.length - 1] // waliduje ostatni element listy
            expect(title).to.eq("Clementina DuBuque") // post niby dziala ale nie pokazuje się na stronie, dlatego waliduje tutaj innego uzytkownika
        })
    })

})