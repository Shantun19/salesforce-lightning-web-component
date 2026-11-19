import { LightningElement , track } from 'lwc';

export default class TrackProperty_02 extends LightningElement {
    /**
    @track
    @track is a decorator used to make changes inside an object's properties or an array's elements reactive, so that the component's UI automatically updates when those properties change.

    First, what problem does @track solve? - Imagine you have a student object in your LWC component:
    
    student = {
        name: 'Rahul',
        age: 22
    };

    And in your HTML:

    <template>
        <p>Name: {student.name}</p>
        <p>Age: {student.age}</p>
        <button onclick={handleUpdateChange}>update age</button>
    </template>

    when you execute the method handleUpdateChange,

    handleUpdateChange(e) {        
        this.student.age = 35
        console.log('student object ' , this.student);
    }

    the student age gets updated but the changes is not get reflected back to the UI to make this reactive we need to use the @track decorator so whenever there is an change in the JS file through the function it get updated to the UI.

    we need to update the object with

    @track student = {
        name: 'Rahul',
        age: 22
    };
    
    */
}