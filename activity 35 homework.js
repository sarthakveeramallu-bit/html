<div>
<h2>JavaScript Class Inheritance</h2>

<p id="details"></p>
<p id="greetings"></p>
</div>

class Grade extends Student {
    constructor(name, grade) {
    super(name);
    this.studentGrade = grade;
    }

    show() {
    return this.present() + ', ' + this.studentGrade;
    }
}