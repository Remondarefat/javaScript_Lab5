class Person {
  constructor(fullName, sleepMood, healthRate) {
    this.fullName = fullName;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
  }
  sleep(hours) {
    if (hours > 7) {
      this.sleepMood = "lazy";
    } else if (hours < 7) {
      this.sleepMood = "tired";
    } else {
      this.sleepMood = "happy";
    }
  }
  eat(meals) {
    switch (meals) {
      case 3:
        this.healthRate = 100;
        break;
      case 2:
        this.healthRate = 75;
        break;
      case 1:
        this.healthRate = 50;
        break;
    }
  }
  buy(items) {
    if (items > 0) {
      this.money -= 10 * items;
    }
  }
}

// this keyword be a reference to the object that is inheriate from the class //-------

class Employee extends Person {
  constructor(
    fullName,
    sleepMood,
    healthRate,
    e_id,
    e_email,
    e_workMood,
    e_salary,
    e_isManager
  ) {
    super(fullName, sleepMood, healthRate); //----- Super call person constructor
    this.id = e_id;
    this.email = e_email;
    this.workMood = e_workMood;
    this.salary = e_salary;
    this.isManager = e_isManager;
  }
  work(hours) {
    if (hours > 7) {
      this.e_workMood = "lazy";
    } else if (hours < 7) {
      this.e_workMood = "tired";
    } else {
      this.e_workMood = "happy";
    }
  } 
  salary(value){
    if(value>=1000){
      this.e_salary=value;
    }
  }
}

//---------------- Office Class 
class Office {
  constructor(name, employees) {
    this.name = name;
    this.employees = [];
  }
  getAllEmployees() {
    return this.employees;
  }

  getEmployee(empId) {
    return this.employees.find((employee) => employee.id == empId);
  }
  hire(employee) {
    this.employees.push(employee);
  }
  fire(empId) {
    var employeeIndex = this.employees.findIndex((i) => i.id == empId);
    this.employees.splice(employeeIndex, 1);
  }
}


let newOffice = new Office();
while (true) {
  let checkOperation = prompt(`Please choose your operation 
('add' ,'search', 'get all employee' , 'hire' , 'fire' ,'q'----> For Exist )`).toLowerCase();

switch(checkOperation)
{
  case "add":
    let userPosition = prompt(`Please Enter Your Position 
('Employee press nrml') OR ('manager press mngr')`).toLowerCase();
  if (userPosition == "nrml") {
    let empName = prompt("please Enter Your Full Name ");
    let empSleepMode = prompt("please Enter Your sleep mode ");
    let empHealthRate = prompt("please Enter Your health rate ");
    let empId = prompt("please Enter Your Id ");
    let empMail = prompt("please Enter Your Email ");
    let empWorkMode = prompt("please Enter Your Work Mode ");
    let salary = prompt("please Enter Your Salary ");
    let empIsManager = prompt(" You is a manager (Yes or No ) ");
    let normalEmployee = new Employee(empName,
      empSleepMode,
      empHealthRate,
      empId,
      empMail,
      empWorkMode,
      salary,
      false)
      newOffice.hire(normalEmployee);}
        break; 
  
    case "get" :
      let officeEmps = newOffice.getAllEmployees();
      console.log(officeEmps);
      break;

    case "search" :
      let searchId = prompt("Please Enter Id you search for ");
      let result = newOffice.getEmployee(searchId);
      if (result == searchId ){
        alert("This Employee is Exsist");
      }
      else
      {
        alert("this Employee not Exsist");
      }
      break ;
    
    case "fire"  :
      let fireId = prompt("Please Enter Employee you need to fire him ");
      newOffice.fire(fireId);
      break;

    case "hire"  :
      let hireEmp = prompt("Please Enter Employee you need to fire him ");
      newOffice.hire(hireEmp);
      break;
    
    case "q" :
      break  ;

    default :
    alert ("Invalid Operation Please Try Again ")  
    
}
}











