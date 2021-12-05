import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Wrapper } from "./login.styled";
import {useFormik} from "formik";
import * as Yup from "yup";
import { signIn, useSession } from "next-auth/react";
import router from "next/router";
import { toast } from "react-toastify";

const login = () => {
    const { data:session, status} = useSession();
    const isUser = !!session?.user
    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const onSubmit = async (values, {setSubmitting}) => {
        const signin = await signIn("credentials", 
        {
            ...values, 
            redirect: false,
            callbackUrl: '/features'
        });
        if(signin.error){
            toast(signin.error);
        }
        setSubmitting(false);    
    }

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
        isSubmitting
    } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit
    });

    useEffect(() => {
        if (status === "loading") return ;
        if (isUser) router.push('/');
    }, [isUser, status]);

    return (
        <Wrapper>
            <Container className="mt-5">
                <Row>
                    <Col sm={{ span: 4, offset: 4 }}>
                        <Form method="post" action="" onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    disabled={isSubmitting}
                                    type="text" 
                                    placeholder="Enter email"
                                    name="email" 
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={errors.email || touched.email}
                                />
                                {errors.email || touched.email ? (
                                    <Form.Control.Feedback tooltip type="invalid">{errors.email}</Form.Control.Feedback>
                                ) : null}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    disabled={isSubmitting}
                                    type="password" 
                                    placeholder="Password" 
                                    name="password" 
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={errors.password || touched.password}    
                                />
                                {errors.password || touched.password ? (
                                    <Form.Control.Feedback  tooltip type="invalid">{errors.password}</Form.Control.Feedback>
                                ) : null}
                            </Form.Group>
                            <Button 
                                disabled={isSubmitting}
                                variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    );
};

export default login;
