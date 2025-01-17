import React from "react";
import { Button, Row, Form, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { AddSkillValidation } from "../../commondata/formvalidations"; // Update validation schema file
import toast from "react-hot-toast";
import PageHeader from "../../layouts/layoutcomponents/pageheader";

export default function AddSkill() {
    const navigate = useNavigate();

    // Initialize form values
    const initialValues = {
        name: "",
        status: "",
    };

    // Set up Formik for form validation and submission
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: AddSkillValidation,
        onSubmit: async (values) => {
            try {
                // Replace this with the actual API call to add the new skill
                toast.success("Skill added successfully!");
                navigate("/skills-page"); // Redirect to the skills list after adding a new skill
            } catch (error) {
                console.error("Error adding skill", error);
                toast.error("Failed to add skill");
            }
        },
    });

    return (
        <>
            <Row className="align-items-center">
                <Col>
                    <PageHeader titles="Skills" active="Add New Skill" items={["Home", "Skills List"]} links={['/dashboard', "/skills-page"]} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={12}>
                                        <Form.Group>
                                            <Form.Label>Skill Name <span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.name && touched.name && (
                                                <p className="text-danger">{errors.name}</p>
                                            )}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <Form.Group>
                                            <Form.Label>Status <span className="text-danger">*</span></Form.Label>
                                            <Form.Select
                                                name="status"
                                                value={values.status}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            >
                                                <option value="">Select</option>
                                                <option value="true">Active</option>
                                                <option value="false">Inactive</option>
                                            </Form.Select>
                                            {errors.status && touched.status && (
                                                <p className="text-danger">{errors.status}</p>
                                            )}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="text-center">
                                        <Button type="submit">Add Skill</Button>
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
