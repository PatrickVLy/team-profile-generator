const { expect } = require("@jest/globals");
const fs = require("fs");
const { getMaxListeners } = require("node:process");
const Employee = require("./lib/Employee")

jest.mock(Employee);

describe("getName", () => {
    it("get name of employee", () => {
      const employee1 = new Employee ("patrick", 8989, "patrickly72@gmail.com");
    expect(employee1.name).toEqual("patrick");

 
    });
  
    describe("getId", () => {
        it("get id of employee", () => {
          const employee1 = new Employee ("patrick", 8989, "patrickly72@gmail.com");
        expect(employee1.Id).toEqual(8989);
    
     
        });

        describe("getName", () => {
            it("get email of employee", () => {
              const employee1 = new Employee ("patrick", 8989, "patrickly72@gmail.com");
            expect(employee1.email).toEqual("patrickly72@gmail.com");
        
         
            });
  });
})})