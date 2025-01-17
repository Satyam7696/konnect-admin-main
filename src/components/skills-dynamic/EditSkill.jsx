import React, { useEffect } from "react";
import { Button, Row, Form, Col, Card } from "react-bootstrap";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { AddPageValidation } from "../../commondata/formvalidations"; // Adjust validation schema if necessary
import toast from "react-hot-toast";
import PageHeader from "../../layouts/layoutcomponents/pageheader";
// Uncomment the following imports if connected to Redux and APIs
// import { useUpdateSkillMutation, useGetAllSkillsQuery } from "../../redux/features/SkillsEndPoints";
// import Loader from "../../layouts/layoutcomponents/loader";

export default function EditSkill() {
    const navigate = useNavigate();
    const location = useLocation();

    // Uncomment if using API hooks
    // const { refetch } = useGetAllSkillsQuery();
    // const [updateSkill, { isLoading: loading }] = useUpdateSkillMutation();

    // Initial values for the form
    const initialValues = {
        name: "",
        status: "",
    };

    // Setting up Formik
    const { values, errors, handleBlur, touched, handleChange, handleSubmit, setFieldValue } = useFormik({
        initialValues: initialValues,
        validationSchema: AddPageValidation, // Update this schema for skill-specific validation if needed
        onSubmit: async (values) => {
            // Uncomment and replace with API logic
            // try {
            //     const response = await updateSkill({ skillId: location?.state?.id, skillData: values });
            //     if (response?.data?.http_status_code === 200) {
            //         refetch();
            //         toast.success(response?.data?.message);
            //         navigate("/all-skills");
            //     } else {
            //         console.error("Unexpected response", response);
            //     }
            // } catch (error) {
            //     console.error("Error submitting form", error);
            //     toast.error("Failed to update skill");
            // }
        },
    });

    // Populate form fields with existing skill data on mount
    useEffect(() => {
        setFieldValue("name", location?.state?.name || "");
        setFieldValue("status", location?.state?.status || "");
    }, []);

    return (
        <>
            {/* {loading && <Loader />} */}
            <Row className="align-items-center">
                <Col>
                    <PageHeader titles="Skills" active="Edit Skill" items={["Home", "Skill List"]} links={["/dashboard", "/skills-page"]} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Skill Name <span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.name && touched.name && <p className="text-danger">{errors.name}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
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
                                            {errors.status && touched.status && <p className="text-danger">{errors.status}</p>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="text-center">
                                        <Button type="submit">Update Skill</Button>
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
