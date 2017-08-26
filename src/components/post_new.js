import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
class PostNew extends Component {
    // {...field.input} is used to wireup the event handllers to the input its a short hand for onChange=field.input.onChange so on..
    renderTitleField(field){
        return (
            <div className="form-group">
                <label>Title</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }
    // The field attribute doesn't know how to render UI for the element it only checks the under the hood functionalities
    // It calls a function that contains a JSX blob to render the UI(this function is automically called so we dont hav eto call it explicitly)
    render() {
        return (
            <form>
                <Field
                    name="title"
                    component={this.renderTitleField}
                />
            </form>
        );
    }
}

export default reduxForm({
    // Unique name for our form
    form: 'PostNewForm'
})(PostNew);