
const form = document.getElementById("gradeForm");
const subjectInputs = document.getElementById("subjectInputs");
const gradeOutput = document.getElementById("gradeOutput");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const numSubjects = parseInt(form.numSubjects.value);
  let totalMarks = 0;

  for (let i = 1; i <= numSubjects; i++) {
    const subjectMark = parseInt(document.getElementById(`subject${i}`).value);
    totalMarks += subjectMark;
  }

  const averageMark = totalMarks / numSubjects;
  let grade;

  if (averageMark >= 90) {
    grade = "A";
  } else if (averageMark >= 80) {
    grade = "B";
  } else if (averageMark >= 70) {
    grade = "C";
  } else if (averageMark >= 60) {
    grade = "D";
  } else if (averageMark >= 50) {
    grade = "E";
  } else {
    grade = "F";
  }

  gradeOutput.innerText = `Your grade is ${grade}.`;

  form.reset();
  subjectInputs.innerHTML = "";
});

form.numSubjects.addEventListener("input", () => {
  const numSubjects = parseInt(form.numSubjects.value);
  let inputHTML = "";

  for (let i = 1; i <= numSubjects; i++) {
    inputHTML += `
      <label for="subject${i}">Subject ${i} mark:</label>
      <input type="number" id="subject${i}" name="subject${i}" min="0" max="100" required>
    `;
  }

  subjectInputs.innerHTML = inputHTML;
});

