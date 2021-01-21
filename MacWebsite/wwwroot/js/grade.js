var submit = document.getElementById('submitButton');

submit.addEventListener("click", function () {

    //Scores recieved for each class

    assignment = Number(document.getElementById("assignmentPercent").value);
    group = Number(document.getElementById("groupPercent").value);
    quiz = Number(document.getElementById("quizPercent").value);
    exam = Number(document.getElementById("examPercent").value);
    intex = Number(document.getElementById("intexPercent").value);

    //Percentage weight for each type

    aPercent = .5
    gPercent = .1
    qPercent = .1
    ePercent = .2
    iPercent = .1

    //Calculate final grade based on weights (fg = finalgrade)

    fg = (assignment * aPercent) + (group * gPercent) + (quiz * qPercent) + (exam * ePercent) + (intex * iPercent)

    //Determine Letter Grade

    if (fg >= 93) {
        letterGrade = "A";
    }
    else if (fg >= 90) {
        letterGrade = "A-";
    }
    else if (fg >= 87) {
        letterGrade = "B+";
    }
    else if (fg >= 83) {
        letterGrade = "B";
    }
    else if (fg >= 80) {
        letterGrade = "B-";
    }
    else if (fg >= 77) {
        letterGrade = "C+";
    }
    else if (fg >= 73) {
        letterGrade = "C";
    }
    else if (fg >= 70) {
        letterGrade = "C-";
    }
    else if (fg >= 67) {
        letterGrade = "D+";
    }
    else if (fg >= 63) {
        letterGrade = "D";
    }
    else if (fg >= 60) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "E";
    }

    //Print grade percentage and final grade

    alert("Assignemnts: " + document.getElementById("assignmentPercent").value + "%\n" +
        "Group Work: " + document.getElementById("groupPercent").value + "%\n" +
        "Quizzes: " + document.getElementById("quizPercent").value + "%\n" +
        "Exams: " + document.getElementById("examPercent").value + "%\n" +
        "Intex: " + document.getElementById("intexPercent").value + "%\n" +
        "Final Grade: " + fg.toFixed(2) + "%\n" +
        "Letter Grade: " + letterGrade
    )




});