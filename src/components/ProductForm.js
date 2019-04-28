import React, { Component } from 'react'

export default class ProductForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Title:
                        <input type='text' name='title' value={this.props.values['title']} onChange={this.props.onChange} />
                    </label>
                    <label>Description:
                        <input type='text' name='description' value={this.props.values['description']} onChange={this.props.onChange} />
                    </label>
                    <label>Picture:
                        <input type='text' name='picture' value={this.props.values['picture']} onChange={this.props.onChange} />
                    </label>
                    <label>Price:
                        <input type='text' name='price' value={this.props.values['price']} onChange={this.props.onChange} />
                    </label>
                    <label>Email:
                        <input type='text' name='email' value={this.props.values['email']} onChange={this.props.onChange} />
                    </label>
                    <label>Phonenumber:
                        <input type='number' name='phonenumber' value={this.props.values['phonenumber']} onChange={this.props.onChange} />
                    </label>
                    <button onClick={this.props.onSubmit} type='submit' value="Submit">Verzenden</button>
                </form>
            </div>
        )
    }
}
