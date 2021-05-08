const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, id, email, ){
        super (name, id, email)
        this.title = "Engineer"
    }

    getRole(){
        return this.title;
    }
}

module.exports = Engineer