import React, { Component } from 'react'
import { Title, LineInput, SubmitButton, SecondaryOptionText } from './styles'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo';

const ADD_USER = gql`
 	mutation addUser($addUserInput: AddUserInput!) {
addUser(addUserInput: $addUserInput) {
	email
  password
}
}
`


class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  onChange = (key, e) => {
    this.setState({ [key]: e.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <Title>Nice to meet you!</Title>
        <LineInput
          placeholder="Email"
          onChange={e => this.onChange('email', e)}
        />
        <LineInput
          placeholder="Password"
          onChange={e => this.onChange('password', e)}
          type="password"
        />
        <Mutation 
          mutation={ADD_USER}
          variables={{ addUserInput: this.state.user }}
        >
          {(addUser, { data }) => (
            <SubmitButton onClick={addUser}>Get Started</SubmitButton>
          )}
        </Mutation>
        
        <SecondaryOptionText onClick={this.props.changeMode}>
          Or Login
        </SecondaryOptionText>
      </React.Fragment>
    )
  }
}

export default SignUp
