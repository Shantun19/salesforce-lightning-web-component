import { LightningElement } from 'lwc';

export default class ConditionalRenderingLWC_04 extends LightningElement {
    /**
    
    What is Conditional Rendering in LWC?
    -------------------------------------
    In Salesforce LWC, Conditional Rendering means displaying or hiding HTML elements based on a particular condition.
    In simple words:
        If a condition is TRUE → Display something.
        If a condition is FALSE → Hide it or display something else.
    Example - Imagine you are using Salesforce and viewing an Account record.
        You have two buttons:
            - Edit Account
            - Create Account
        But you want to display the Edit Account button only when an Account record exists.
        What happens?
            If Account exists → Show Edit Account button.
            If Account doesn't exist → Show Create Account button.
        This is called Conditional Rendering.
    
    What problem does Conditional Rendering solve?
    ----------------------------------------------
    Before conditional rendering, imagine you wanted to display different sections based on different situations.
    For example:
        Show a success message when a record is saved.
        Show an error message when something goes wrong.
        Show a loading spinner while data is loading.
        Show a form only when the user clicks a button.
        Show different buttons based on user actions.
    Without conditional rendering, you would have difficulty controlling which HTML elements should be displayed.
    Conditional Rendering solves this problem by allowing us to dynamically control the visibility of HTML elements based on JavaScript conditions.

    Which directives are used for Conditional Rendering?
    ----------------------------------------------------
    Salesforce LWC provides three important directives:
        lwc:if : Displays HTML when the condition is true
        lwc:elseif : Checks another condition if the previous one is false
        lwc:else : Displays HTML when all previous conditions are false
    */
   
    // A. lwc:if
    isVisible = false;

    handleDisplay(e) {
        this.isVisible = true;
    }

    handleHide(e) {
        this.isVisible = false;
    }
}