import { LightningElement } from 'lwc';

export default class TemplateLooping_07 extends LightningElement {
    /**
    Template Looping - part 2
    the syntax of template looping look like - 
    
    <template for:each={array} for:item="currentItem" for:index="index"></template>

    for:each={array} - the js array that in which we need to perform the itrations.
    for:item="currentItem" - this points the current item from the array.
    for:index="index" - index is the current element index in the array. it holds the index of the current element.

    key attribute
    -------------
    a key is a special string attribute you need to include to the first element inside the template when creating list of element.
    with the help of this salesforce engine can identify which item got updated.
    Note - the key must be an number or a string it can't be an object you can use the index value as the key.
    */

    carList = ['ford' , 'audi' ,'suzuki' , 'skoda' , 'bmw'];
}