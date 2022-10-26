const { createPerson } = require('.');

describe("createPerson", () => {
    let person;

    beforeEach(function () {
        person = createPerson();
    });

    it('should return undefined when no name set', function () {
        expect(person.getName()).toBe(undefined)
    });

    it("should set a name", () => {
        const name = "John Wick";
        person.setName(name);
        const actual = person.getName(name);

        expect(actual).toEqual(name);
    });

    it('should have only two methods', function () {
        expect(Object.keys(person).length).toEqual(2);
    });

    it('should have only methods "setName" and "getName"', function () {
        expect(Object.keys(person)).toEqual(["setName", "getName"]);
    });
});

