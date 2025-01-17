import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import PageHeader from "../../layouts/layoutcomponents/pageheader";

export default function MostSearchedSkills() {
    const navigate = useNavigate();
    const [mostSearchedSkills, setMostSearchedSkills] = useState([]);

    // Sample data for most searched skills
    const skillsData = [
        { id: 1, name: "React Development", searchCount: 250 },
        { id: 2, name: "Node.js Development", searchCount: 200 },
        { id: 3, name: "UI/UX Design", searchCount: 180 },
        { id: 4, name: "Machine Learning", searchCount: 150 },
    ];

    useEffect(() => {
        // Here you can replace skillsData with an API call to get most searched skills
        setMostSearchedSkills(skillsData);
    }, []);

    // const handleViewSkill = (skillId) => {
    //     // Navigate to view skill page with the skillId
    //     navigate(`/view-skill/${skillId}`);
    // };

    return (
        <>
            <Row className="align-items-center">
                <Col>
                    <PageHeader titles="Skills" active="Most Searched Skills" items={["Home"]} links={['/dashboard']} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="mb-4">Most Searched Skills</h5>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Skill Name</th>
                                        <th>Search Count</th>
                                        {/* <th>Action</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {mostSearchedSkills.map((skill, index) => (
                                        <tr key={skill.id}>
                                            <td>{index + 1}</td>
                                            <td>{skill.name}</td>
                                            <td>{skill.searchCount}</td>
                                            {/* <td>
                                                <Button
                                                    variant="primary"
                                                    onClick={() => handleViewSkill(skill.id)}
                                                >
                                                    View
                                                </Button>
                                            </td> */}
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
