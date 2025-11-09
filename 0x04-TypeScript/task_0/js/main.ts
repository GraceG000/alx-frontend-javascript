interface Student{
 firstName: string,
 lastName: string,
 age: number,
 location: string   
}

const student1: Student = {
    firstName : "Rhoshonda",
    lastName : "Howe",
    age: 17,
    location: "Accra, Ghana"
}

const student2: Student = {
    firstName : "Dennis",
    lastName : "Blay",
    age: 17,
    location: "Lagos, Nigeria"
}

const studentsList: Student[] = [
    student1,
    student2
]

// Create a table element
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

/*Looping through the students and adding rows to the table...*/
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

/*appending the table body to table...*/
table.appendChild(tableBody);


/*appending the table to document body...*/
document.body.appendChild(table);