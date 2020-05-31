import React, {Component} from 'react';

class ContactListForm extends Component {
    state = {
        newContact: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
        }
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit({...this.state.newContact})
        this.resetForm()
    }
    resetForm = () => {
        this.setState({
            newContact: {
                firstName: '',
                lastName: '',
                phoneNumber: '',
            }
        })
    }

    onInputChange = (e) => {
        const target = e.target;
        let value = target.value;
        const name = target.name;

        if (name === 'phoneNumber') {
            value = this.maskPhoneInput(value)
        }
        this.setState({
            newContact: {
                ...this.state.newContact,
                [name]: value
            }
        })
    }

    maskPhoneInput(value) {
        return value.replace(/\D/g, '')
    }

    onClickCloseButton = (e) => {
        e.preventDefault()
        this.props.onClose()
    }

    submitButtonValidation() {
        return !(this.state.newContact.firstName && this.state.newContact.lastName && this.state.newContact.phoneNumber)
    }

    getInputStyles(value) {
        const styles = {...inputStyles}
        if (value) {
            styles.border = '1px solid green'
        }
        return styles;
    }

    getSubmitButtonStyle() {
        const styles = {...contact_form_btn}

        if(this.submitButtonValidation()) {
            styles.backgroundColor = 'gray'
        }

        return styles

    }

    render() {
        return (
                <form style={contact_form}>
                    <input type="text" name="firstName"
                           value={this.state.newContact.firstName}
                           onChange={this.onInputChange}
                           placeholder={'Enter first name'}
                           style={this.getInputStyles(this.state.newContact.firstName)}
                    />
                    <input type="text" name="lastName"
                           value={this.state.newContact.lastName}
                           onChange={this.onInputChange}
                           placeholder={'Enter last name'}
                           style={this.getInputStyles(this.state.newContact.lastName)}
                    />
                    <input type="tel" id="phone" name="phoneNumber"
                           placeholder={'Enter phone number'}
                           value={this.state.newContact.phoneNumber}
                           onChange={this.onInputChange}
                           style={this.getInputStyles(this.state.newContact.phoneNumber)}
                    />
                    <button onClick={this.onFormSubmit} disabled={this.submitButtonValidation()} style={this.getSubmitButtonStyle()}>Сохранить</button>
                    <button onClick={this.onClickCloseButton} style={contact_form_btn}>Отмена</button>
                </form>
        );
    }
}

export default ContactListForm;

let inputStyles = {
    border: '1px solid red',
    borderRadius: '5px',
    padding: '4px',
    margin: '10px'
}

const contact_form = {
    marginTop: '30px',
    border: '1px solid gray',
    borderRadius: '5px',
    boxShadow: '0 0 2px rgba(0,0,0,0.5)'
}

const contact_form_btn = {
    marginTop: '20px',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#4682B4',
    color: 'white',
    border: 'none',
    padding: '5px 20px',
    fontSize: '20px',
    margin: '10px'
}