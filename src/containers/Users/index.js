import React, { Component } from 'react'
import { Container, Header, SearchBar, UsersContainer } from './styles'
import UserCard from './components/UserCard'
import gql from 'graphql-tag'
import { Query } from "react-apollo"

const GET_USERS = gql`
  query users{
    user {
      id
      name
    }
  }
`

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: ''
    }
  }

  handleChange = e => {
    this.setState({ searchText: e.target.value })
  }

  render() {
    const users = () => (
      <Query query={GET_USERS}>
        {({ loading, error, data }) => (
          <UserCard>
            img="https://static.stereogum.com/uploads/2018/01/GettyImages-889998292-1517445539-640x462.jpg"
            name = {data.user.name}
          </UserCard>
        )}
      </Query>
    )
    return (
      <Container>
        <Header>
          <SearchBar
            classname="serachbar"
            placeholder="Search"
            onChange={this.handleChange}
          />
        </Header>
        <UsersContainer>{users}</UsersContainer>
      </Container>
    )
  }
}

export default Users
