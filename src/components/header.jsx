import React from 'react'
import {Navbar,Form,FormControl} from 'react-bootstrap'
const Header = ({query,setQuery}) => {
  return (
    <>
      <Navbar variant="dark" bg="dark" expand="lg" className='mainnav'>
      <Form className="d-flex" >
        <FormControl
          type="search"
          value={query}
          placeholder="Search Your Favorite Movie"
          className="me-2"
          aria-label="Search"
          variant="dark"
          onChange={(e) => setQuery(e.target.value)}
        />      </Form>
      </Navbar>
    </>
  )
}

export default Header
