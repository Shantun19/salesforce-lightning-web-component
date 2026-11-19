import { LightningElement } from 'lwc';

export default class GetterInLWC_03 extends LightningElement {
    /**
    A getter in salesforce lwc is a special method that is use to calculate or return the value dynamically.
    Getter = Get a value after performing some logic or calculation.

    First, what problem does Getter solve? - Imagine you have two variables:

    firstName = 'Rahul';
    lastName = 'Sharma';

    You want to display the full name in your HTML.Normally, you might think of writing something like this: <p>{firstName + ' ' + lastName}</p>
    But LWC templates don't support such complex JavaScript expressions.So how can we combine two variables and display the result? This is exactly where a Getter helps us.

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    
    Let's understand the real power of Getter - Suppose the user changes their first name.


    */

    firstName = 'Rahul';
    lastName = 'Sharma';

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    handleChangeName(event) {
        this.firstName = 'Peter';
    }
}