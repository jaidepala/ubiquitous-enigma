/*
    FillUpForm Component
*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import FormRender from '../components/form-render';
import ShowData from './show-data';
import Navigation from '../components/navigation.jsx';

import { Uuid } from '../components/uuid';

// Styling
import './fill-up-form.css';

class FillUpForm extends Component {

    constructor(props) {

        super(props);

        this.state = {

            formValues: {},

            addedValues: [],

            formSetup: [
                {
                    id: 1,
                    labelText: 'First Name',
                    name: 'userFname',
                    type: 'input',
                    mandatory: true,
                    placeholderText: 'Enter Your First Name Here',
                },
                {
                    id: 2,
                    labelText: 'Last Name',
                    name: 'userLname',
                    type: 'input',
                    mandatory: true,
                    placeholderText: 'Enter Your Last Name Here',
                },
                {
                    id: 3,
                    labelText: 'Email',
                    name: 'userEmail',
                    type: 'email',
                    mandatory: true,
                    placeholderText: 'Enter Your Email Here',
                },
                {
                    id: 5,
                    labelText: 'Phone Number',
                    name: 'userPhone',
                    type: 'phone',
                    mandatory: true,
                    placeholderText: 'Enter Your Phone Here',
                },
                {
                    id: 4,
                    labelText: 'Message',
                    name: 'userMessage',
                    type: 'textarea',
                    mandatory: false,
                    placeholderText: 'Enter Your Message Here',
                }
            ]
        };
    };

    handleSubmit = (evt) => {

        evt.preventDefault();

        let { addedValues, formValues } = this.state;

        formValues['id'] = Uuid();

        addedValues.push(formValues);

        this.setState({
            formValues: {}
        });

        document.getElementById("create-course-form").reset();
    };

    handleChange = (evt, props) => {

        let updateField = props.name,
            changeTo = evt.target.value;

        this.setState(prevState => ({
            formValues: {
                ...prevState.formValues,
                [updateField]: changeTo
            }
        }))
    };

    render() {

        const { formSetup } = this.state;

        const FormComponents = formSetup.map(thisForm => {

            return (<FormRender
                key={thisForm.id}
                labelText={thisForm.labelText}
                name={thisForm.name}
                type={thisForm.type}
                required={thisForm.mandatory}
                placeholderText={thisForm.placeholderText}
                onType={this.handleChange}
            />)
        });

        return (
            <Router>

                <Navigation />

                <Switch>
                    <Route exact path="/">
                        <div className="fill-up-container">
                            <form id="create-course-form" onSubmit={this.handleSubmit}>
                                <ul className="flex-outer">
                                    {FormComponents}
                                    <li>
                                        <button type="submit">
                                            Submit
                                    </button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </Route>
                    <Route path="/list">
                        <ShowData addedValues={this.state.addedValues} />
                    </Route>
                </Switch>
            </Router>
        );
    };

};

// export default withRouter(FillUpForm);
export default FillUpForm;
