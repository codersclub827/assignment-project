// Input data: array of student objects
const students = [
    {
        student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    },
    {
        student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    },
    {
        student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    }
];

// Calculate average for each student
const studentAverages = students.map(student => {
    // Get the key for the student object, e.g., "student1"
    const key = Object.keys(student)[0];

    // Get all subject marks as an array
    const marks = Object.values(student[key]);

    // Calculate average
    const average = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;

    // Return a new object with only the average
    return { [key]: { average } };
});

console.log(studentAverages);
