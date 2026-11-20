import { LightningElement } from 'lwc';

export default class TemplateLooping_06 extends LightningElement {
    /**
    Template looping
    ----------------
    Template looping in Salesforce Lightning Web Components (LWC) means displaying multiple records or items dynamically in the HTML template using JavaScript data.
    For example, suppose you have 5 student records in JavaScript. Instead of writing HTML 5 times, you can use a loop to display all 5 students automatically.
    
    In LWC, we mainly use two directives for looping:
        for:each
        iterator
    
    1. Using for:each in LWC - The for:each directive is used to iterate over an array of records and display each record in the HTML template.
    */
    students = [
        {
            id: 1,
            name: 'Rahul',
            age: 22
        },
        {
            id: 2,
            name: 'Amit',
            age: 23
        },
        {
            id: 3,
            name: 'Priya',
            age: 21
        }
    ];

    /**
    2. Using iterator in LWC
    The iterator directive is also used to loop through an array.
    The main difference is that iterator gives you additional information about the current item, such as:
        value – Current record.
        index – Position of the current record.
        first – Checks whether the current record is the first item.
        last – Checks whether the current record is the last item.
    */
}