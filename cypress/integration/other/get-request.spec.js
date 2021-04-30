describe("Get request", () => {

    it("Validate status code api", () => {
        var result;
        result = cy.request("https://jsonplaceholder.typicode.com/posts")
        result.its("status").should("equal", 200).and("not.equal", 400)
    })

    it("Validate if title has correct value", () => {
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts",
            headers: {
                accept: "application/JSON"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body)

            expect(body[1]).has.property("title", "qui est esse")
            expect(body[3]).has.property("title", "eum et est occaecati")

            body.forEach(item => {
                expect(item).to.have.all.keys("userId", "id" ,"title", "body")
                //cy.log("Title: " + item["title"] + " & Body: " + item["body"])
            });
        })
    })
})