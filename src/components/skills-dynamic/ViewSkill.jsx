import React, { useEffect } from "react";
import { Row, Form, Col, Card } from "react-bootstrap";
import { useFormik } from "formik";
import { useLocation } from "react-router-dom";
import PageHeader from "../../layouts/layoutcomponents/pageheader";

export default function ViewSkill() {
    const location = useLocation();

    const initialValues = {
        name: "",
        status: "",  // Add the status field here
    };

    const { values, setFieldValue } = useFormik({
        initialValues: initialValues,
        onSubmit: () => {}
    });

    useEffect(() => {
        setFieldValue('name', location?.state?.name);
        setFieldValue('status', location?.state?.status);  // Set the status field value from the location state
    }, [location, setFieldValue]);

    return (
        <>
            <Row className="align-items-center">
                <Col>
                    <PageHeader titles="Skills" active="View Skill" items={["Home", "Skills List"]} links={['/dashboard', "/skills-page"]} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Row>
                                    <Col as={Col} md={6}>
                                        <Form.Group>
                                            <Form.Label>Skill Name <span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={values.name}
                                                disabled
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col as={Col} md={6}>
                                        <Form.Group>
                                            <Form.Label>Status <span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="status"
                                                value={values.status}
                                                disabled
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
