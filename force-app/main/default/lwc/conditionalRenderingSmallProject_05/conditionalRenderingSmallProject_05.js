import { LightningElement, track } from 'lwc';

const students = new Map
(
    [
        [101, { studentName: "Rahul", age: 18, class: "12th", rollNo: 101, marks: { physics: 85, chemistry: 90, maths: 95 } }],
        [102, { studentName: "Priya", age: 17, class: "12th", rollNo: 102, marks: { physics: 92, chemistry: 88, maths: 96 } }],
        [103, { studentName: "Amit", age: 18, class: "12th", rollNo: 103, marks: { physics: 78, chemistry: 82, maths: 85 } }],
        [104, { studentName: "Sneha", age: 17, class: "12th", rollNo: 104, marks: { physics: 95, chemistry: 91, maths: 89 } }],
        [105, { studentName: "Vikram", age: 18, class: "12th", rollNo: 105, marks: { physics: 80, chemistry: 75, maths: 88 } }],
        [106, { studentName: "Anjali", age: 17, class: "12th", rollNo: 106, marks: { physics: 89, chemistry: 94, maths: 92 } }],
        [107, { studentName: "Karan", age: 18, class: "12th", rollNo: 107, marks: { physics: 72, chemistry: 80, maths: 76 } }],
        [108, { studentName: "Neha", age: 17, class: "12th", rollNo: 108, marks: { physics: 91, chemistry: 87, maths: 93 } }],
        [109, { studentName: "Rohit", age: 18, class: "12th", rollNo: 109, marks: { physics: 84, chemistry: 79, maths: 86 } }],
        [110, { studentName: "Pooja", age: 17, class: "12th", rollNo: 110, marks: { physics: 20, chemistry: 20, maths: 20 } }]
    ]
);

export default class ConditionalRenderingSmallProject_05 extends LightningElement {

    // Minimum marks needed in EACH subject to pass (change as you like)
    PASS_MARK = 33;
    invalidRollNumber = false;
    inputRollNo = '';
    @track student;     

    get isPass() {
        if (!this.hasStudent) return false;
        const { physics, chemistry, maths } = this.student.marks;
        return physics >= this.PASS_MARK && chemistry >= this.PASS_MARK && maths >= this.PASS_MARK;
    }

    get totalMarks() {
        if (!this.hasStudent) return 0;
        const { physics, chemistry, maths } = this.student.marks;
        return physics + chemistry + maths;
    }

    get percentage() {
        return (this.totalMarks / 300 * 100).toFixed(2);
    } 

    get hasStudent() {
        return this.student !== undefined && this.student !== null;
    }

    handleRollNoChange(e) {
        this.inputRollNo = e.target.value;
    }

    handleSubmit() {
        this.invalidRollNumber = false;
        this.student = null;
        if (this.inputRollNo === null || this.inputRollNo.trim() === '') {
            this.invalidRollNumber = true;
            return;
        }
        const rollNo = Number(this.inputRollNo);
        if (students.has(rollNo)) {
            this.student = students.get(rollNo);            
        } else {
            this.invalidRollNumber = true;
        }
    }
}