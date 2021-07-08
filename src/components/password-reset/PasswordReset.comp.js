import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

export const ResetPassword = ({handleOnchange, handleOnResetSubmit, formSwitcher, email}) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-info text-center">
                    Reset Password
                </h1>
                <hr/>
                <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
                    <Form.Group>
                        <Form.Label>
                            Email Address
                        </Form.Label>
                        <Form.Control 
                        type="email" 
                        name="email"
                        onChange={handleOnchange}
                        value={email} 
                        placeholder="Enter Email" 
                        required
                        />
                    </Form.Group>
                    
                    <br></br>
                    <Button type="submit">Reset Password</Button>
                </Form>
                <hr />
                </Col>
            </Row>

            <Row>
                <Col>
                <a href="#!" onClick={()=>formSwitcher("login")}>Login Now</a>
                </Col>
            </Row>
            <br></br>
        </Container>
    )
}

ResetPassword.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}