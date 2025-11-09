interface Teacher{
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any; 

}

interface Directors extends Teacher {
  numberOfReports: number;             
}

const teacher1: Teacher = {
  firstName: 'Jonathan',
  fullTimeEmployee: false,
  lastName: 'Blake',
  location: 'London',
  speciality: 'History'
};

console.log(teacher1);