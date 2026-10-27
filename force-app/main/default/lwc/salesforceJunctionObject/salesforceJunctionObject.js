import { LightningElement , wire , track , api } from 'lwc';
import getStudents from '@salesforce/apex/StudentEnrollmentController.getStudents';
import getCourses from '@salesforce/apex/StudentEnrollmentController.getCourses';
import enrollStudent from '@salesforce/apex/StudentEnrollmentController.enrollStudent';
import getEnrollments from '@salesforce/apex/StudentEnrollmentController.getEnrollments';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';

export default class SalesforceJunctionObject extends LightningElement {
    students = [];
    courses = [];

    selectedStudentId = '';
    selectedCourseId = '';

    enrollments = [];
    message = '';

    wiredEnrollmentsResult;

    @wire(getStudents)
    wiredStudents({ data, error }) {
        if (data) {
            this.students = data;
        } else if (error) {
            this.showToast('Error','Unable to load students.','error');
        }
    }

    @wire(getCourses)
    wiredCourses({ data, error }) {
        if (data) {
            this.courses = data;
        } else if (error) {
            this.showToast(
                'Error',
                'Unable to load courses.',
                'error'
            );
        }
    }

    // Load existing enrollments
    @wire(getEnrollments)
    wiredEnrollmentList(result) {
        this.wiredEnrollmentsResult = result;

        if (result.data) {
            this.enrollments = result.data;
        } else if (result.error) {
            this.showToast(
                'Error',
                'Unable to load enrollments.',
                'error'
            );
        }
    }

    // Format students for combobox
    get studentOptions() {
        return this.students.map(student => ({
            label: student.Name,
            value: student.Id
        }));
    }

    // Format courses for combobox
    get courseOptions() {
        return this.courses.map(course => ({
            label: course.Name,
            value: course.Id
        }));
    }

    get isEnrollDisabled() {
        return !this.selectedStudentId || !this.selectedCourseId;
    }

    get hasEnrollments() {
        return this.enrollments.length > 0;
    }

    handleStudentChange(event) {
        this.selectedStudentId = event.detail.value;
        this.message = '';
    }

    handleCourseChange(event) {
        this.selectedCourseId = event.detail.value;
        this.message = '';
    }

    // Call Apex to create an enrollment
    async handleEnroll() {
        try {
            await enrollStudent({studentId: this.selectedStudentId,courseId: this.selectedCourseId});
            this.message = 'Student enrolled successfully!';
            this.showToast('Success','Enrollment created successfully.','success');
            // Refresh the enrollment list
            await refreshApex(this.wiredEnrollmentsResult);
            // Clear the selected values
            this.selectedStudentId = '';
            this.selectedCourseId = '';

        } catch (error) {
            this.showToast(
                'Error',
                error.body?.message || 'Enrollment failed.',
                'error'
            );
        }
    }

    showToast(title, message, variant) {
        this.dispatchEvent(
            new ShowToastEvent({title,message,variant})
        );
    }
}