var employees = []

function Employee(name, job, salary, status = "Full Time"){
this.name = name
this.job = job
this.salary = salary
this.status = status 
this.printEmployeeForm = function(){
    console.log(this. name + this. job + this. salary + this. status)
}
}



var bob = new Employee("bob", "teacher", 40000, "Full Time" )
var tim = new Employee("tim", "Server", 200000, "Part Time")
var caprise = new Employee("Caprise", "data security", 100000, "Full Time")
// console.log(tim)

employees.push(Employee)
bob.printEmployeeForm()
tim.printEmployeeForm()
caprise.printEmployeeForm()


// console.log(employees)