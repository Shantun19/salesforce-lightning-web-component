import { LightningElement } from 'lwc';

export default class Introduction01 extends LightningElement {
    /**
     * lightning framework 
     *  - the lightning component framework is a ui framework for developing single page application for mobile and desktop devices.
     *  - the lightning component using 2 programming models
     *      1.aura component
     *      2.lightning web component
     * 
     * lightning web component follows the ES6 javascript features.
     * lightning web component(LWC) is a new programming model for building lightning components. it uses the core concept of web standard.
     */

    /**
     * coexistence and interoperability
     * aura component and lightning web component can coexist and interoperate and they share the same high level service.
     * aura componenet and lightning web component can coexits on the same page.
     * aura component can able to include the lightning web component but lightning web component(lwc) not able to include the aura component inside.
     */

    /**
     * difference between dev hub and scratch org
     * 
     * Scratch Org
     *      - a scratch org is a custom salesforce enviroment that you can use to develop or to test a salesforce applications.
     *      - it is a Temporary org(1–30 days, depending on configuration).
     *      - it is a fresh salesforce org created from dev hub.
     *      - scratch org will able to store the metdata.
     *      - scratch org is basically used by developers.
     *      - Git Repository
                │
                ▼
            Developer
                │
            Authenticate Dev Hub
                │
                ▼
            Create Scratch Org
                │
                ▼
            Develop Features
                │
                ▼
            Push Source
                │
                ▼
            Run Tests
                │
                ▼
            Commit to Git
                │
                ▼
            Delete Scratch Org
     * 
     * Dev Hub
     *      - dev hub basically manages the scratch orgs.
     *      - it is slso a salesforce org that has dev hub enabled.
     *      - its main responsibility is to create a scratch org and manages/tracking the scratch org.
     *      - Production Org
                │
                Enable Dev Hub
                    │
                    ▼
                Dev Hub
                    │
                ├── Scratch Org A
                ├── Scratch Org B
                └── Scratch Org C
    */
}