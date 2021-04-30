describe("Update request", () => {

    it("Update a value /post", () => {
        cy.request({
            method: "PUT",
            url: "https://jsonplaceholder.typicode.com/users/2",
            body: {
                "name": "WG",
            }
        }).then(response => {
            expect(response.status).to.eq(200)
        })
    })
})