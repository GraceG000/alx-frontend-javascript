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

let firstName: string;
let lastName: string;

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// Define an interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Define an interface for the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the class
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

