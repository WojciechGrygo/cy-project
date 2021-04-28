describe('JSON Object', () => {

    it('Json Object Examples', () => {

        const objectExamples = {"key": "Tim", "key2": "Jon"}

        const arrayObjectExamples = ["Katarina", "Michael"]

        const users = {
            "firstName": "Jim",
            "lastName": "Konieczny",
            "Students": [
                {
                    "firstName": "Sarah",
                    "lastName": "Parker" 
                },
                {
                    "firstName": "Mattew",
                    "lastName": "Nowak"
                }
            ]
        }

        cy.log(objectExamples["key"]) // Tim
        cy.log(objectExamples.key2) // Jon

        cy.log(arrayObjectExamples[0]) // Katarina

        cy.log(users.Students[1].firstName) // Mattew


    })
})