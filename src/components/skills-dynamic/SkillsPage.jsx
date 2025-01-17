import React from "react";
import { Nav, TabContainer, Tabs, Tab, Row, Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../../layouts/layoutcomponents/pageheader";
import SkillsDataTable from "../../commondata/SkillsDataTable"; // Replace with your actual skills data component
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slices/allModalSlice";

export default function SkillsPage() {
    const dispatch = useDispatch();
    return (
        <>
            <Row className="align-items-center">
                <Col>
                    <PageHeader titles="Skills" active="All Skills" items={["Home"]} links={['/dashboard']} />
                </Col>
                <Col className="text-end d-flex justify-content-end gap-1">
                    <Link to={"/add-skill"}>
                        <Button
                            className="btn btn-success"
                            variant=""
                            onClick={() => dispatch(openModal({ componentName: '' }))}
                        >
                            Add New Skill
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body className="data_table">
                            <SkillsDataTable />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
