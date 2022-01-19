const employee = {
    name: "Sam",
    streetAddress: "1192 W Division Ave",
}
    
function updateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    return {
    ...employee,
    [streetAddress]: "11 Broadway",
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    employee[streetAddress] = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee, ...key};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}
