import React, {Component} from 'react';

class ContactListForm extends Component {
    onFormSubmit(e) {
        e.preventDefault()
        console.log('submited', e)
    }
    resetForm(e) {
        e.preventDefault()
        console.log('clear form')

    }

    render() {
        return (
            <form>
                <input type="text" placeholder={'Enter first name'}/>
                <input type="text" placeholder={'Enter last name'}/>
                <input type="text" placeholder={'Enter phone number'}/>
                <button onClick={this.resetForm}>Отмена</button>
                <button onClick={this.onFormSubmit}>Сохранить</button>
            </form>
        );
    }
}

export default ContactListForm;