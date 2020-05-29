import React, {Component} from 'react';

class ContactListForm extends Component {
    state = {
        newContact: {
            firstName: '',
            lastName: '',
            phoneNumber: ''
        }
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        console.log('submited', e)
        this.props.onSubmit({...this.state.newContact})
        this.resetForm()

    }
    resetForm = () => {
        console.log('clear form')
        this.setState({
            newContact: {
                firstName: '',
                lastName: '',
                phoneNumber: ''
            }
        });
    }

    onInputChange = (e) => {
        console.log('onInputChange', e.target.value)
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            newContact: {
            ...this.state.newContact,
                [name]: value
            }
        })
    }

    render() {
        return (
            <form>
                <input type="text" name="firstName" value={this.state.firstName} onChange={this.onInputChange} placeholder={'Enter first name'}/>
                <input type="text" name="lastName" value={this.state.lastName} onChange={this.onInputChange} placeholder={'Enter last name'}/>
                <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onInputChange} placeholder={'Enter phone number'}/>
                {/*<button onClick={this.resetForm}></button>*/}
                <button onClick={this.onFormSubmit}>Сохранить</button>
            </form>
        );
    }
}

export default ContactListForm;