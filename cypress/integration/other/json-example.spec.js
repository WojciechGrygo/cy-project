describe('JSON Object', () => {

    it('Json Object Examples', () => {

        const exampleObject = {"key": "Tim", "key2": "Jon"}

        const exampleArrayOfObjects = ["Katarina", "Michael"]

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

        cy.log(exampleObject["key"]) // Tim
        cy.log(exampleObject.key2) // Jon

        cy.log(exampleArrayOfObjects[0]) // Katarina

        cy.log(users.Students[1].firstName) // Mattew


    })
})