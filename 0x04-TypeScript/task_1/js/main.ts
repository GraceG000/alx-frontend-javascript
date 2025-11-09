interface Teacher{
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any; 

}

interface Director extends Teacher {
  numberOfReports: number;             
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const teacher1: Teacher = {
  firstName: 'Jonathan',
  fullTimeEmployee: false,
  lastName: 'Blake',
  location: 'London',
  speciality: 'History'
};

console.log(teacher1);

const director1: Director = {
  firstName: "Ama",
  lastName: "Owusu",
  fullTimeEmployee: true,
  location: "Accra",
  numberOfReports: 5,
  contract: true, 
};

console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName}. ${lastName}`;
}