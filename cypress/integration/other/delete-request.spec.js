describe("DELETE request", () => {

    it("Delete a value /post", () => {
        cy.request({
            method: "DELETE",
            url: "https://jsonplaceholder.typicode.com/users/2",
        }).then(response => {
            expect(response.status).to.eq(200)
        })
    })
})