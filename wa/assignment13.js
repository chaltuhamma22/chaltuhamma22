// Question 1: creating a JSON array for each employee with their details
const employees = [
    {
      firstName: "Sam",
      department: "Tech",
      designation: "Manager",
      salary: 40000,
      raiseEligible: true
    },
    {
      firstName: "Mary",
      department: "Finance",
      designation: "Trainee",
      salary: 18500,
      raiseEligible: true
    },
    {
      firstName: "Bill",
      department: "HR",
      designation: "Executive",
      salary: 21200,
      raiseEligible: false
    }
  ];
  
  console.log("Question 1:");
  console.log(employees);
  
  // Question 2:  putting the employees inside the company JSON object
  const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
  };
  
  console.log("Question 2:");
  console.log(company);
  
  // Question 3: adding a new employee (Anna) to the existing company JSON
  const newEmployee = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
  };
  
  company.employees.push(newEmployee);
  
  console.log("Question 3:");
  console.log(company);
  
  // Question 4:  calculating total salary of all employees in the company
  let totalSalary = 0;
  for (let i = 0; i < company.employees.length; i++) {
    totalSalary += company.employees[i].salary;
  }
  
  console.log("Question 4:");
  console.log("Total Salary: $" + totalSalary);
  
  // Question 5: writing a function that gives a 10% raise to employees who are eligible
  function applyRaises(companyData) {
    for (let i = 0; i < companyData.employees.length; i++) {
      let emp = companyData.employees[i];
      if (emp.raiseEligible) {
        emp.salary = Math.round(emp.salary * 1.1);
        emp.raiseEligible = false;
      }
    }
  }
  
  applyRaises(company);
  
  console.log("Question 5:");
  console.log(company);
  
  // Question 6: adding a new property 'wfh' to each employee based on who’s working from home
  const workFromHomeNames = ['Anna', 'Sam'];
  
  for (let i = 0; i < company.employees.length; i++) {
    const emp = company.employees[i];
    emp.wfh = workFromHomeNames.includes(emp.firstName);
  }
  
  console.log("Question 6:");
  console.log(company);
  