import { LightningElement } from 'lwc';

export default class FirstLWCComponent_01 extends LightningElement {
    /** 
     * rules to define a LWC component
        * must begin with the lower case letter
        * contains only alphanumeric or underscore characters
        * must be unique in the namespace
        * can't include the whitespace
        * can't end with underscore
        * can't conatain 2 consecutive underscores
        * can't contain hyphen
    */ 

    /** local properties and data binding */
    name;
    age = 20;
    fullName = 'Salesforce Developer';
    showData = false;

    details = {
        name : "dummy Name",
        place : "Australia"
    }

    userList = ["User-A" , "User-B" , "User-C"];

    // Data binding is like the relation/connection of component js file with the comaponent HTML file and where we can display the data that are
    // present inside the js file.

    // functions
    getName() {
        return this.fullName;
    }

    // 2 way data binding means when someone change the data from the html part then it should reflect back to the js.
    // salesforce doesn't support the 2 way binding we need to achieve from the code - using the onchange functions

    title = 'salesforce Auar';

    handleChange(e) {
        this.title = e.target.value;
        console.log('the updated title is ' , this.title);
    }
}