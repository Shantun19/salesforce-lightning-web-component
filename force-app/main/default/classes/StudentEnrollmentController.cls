
public with sharing class StudentEnrollmentController {

    // Get all students for the dropdown
    @AuraEnabled(cacheable=true)
    public static List<Student__c> getStudents() {
        return [
            SELECT Id, Name, Email__c
            FROM Student__c
            ORDER BY Name
        ];
    }

    // Get all courses for the dropdown
    @AuraEnabled(cacheable=true)
    public static List<Course__c> getCourses() {
        return [
            SELECT Id, Name, Fee__c
            FROM Course__c
            ORDER BY Name
        ];
    }

    // Create a junction record
    @AuraEnabled
    public static Id enrollStudent(Id studentId,Id courseId) {
        if (studentId == null || courseId == null) {
            throw new AuraHandledException(
                'Please select both a student and a course.'
            );
        }
        Enrollment__c enrollment = new Enrollment__c(
            Student__c = studentId,
            Course__c = courseId,
            Enrollment_Date__c = Date.today()
        );
        insert enrollment;
        return enrollment.Id;
    }

    // Get existing enrollments
    @AuraEnabled(cacheable=true)
    public static List<Enrollment__c> getEnrollments() {
        return [
            SELECT Id,
                   Student__r.Name,
                   Course__r.Name,
                   Enrollment_Date__c
            FROM Enrollment__c
            ORDER BY CreatedDate DESC
        ];
    }
}
