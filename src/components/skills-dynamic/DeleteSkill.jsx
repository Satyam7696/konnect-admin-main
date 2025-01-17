import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/slices/allModalSlice";
import toast from "react-hot-toast";
// Uncomment and update these imports if API logic is available
// import { useDeleteSkillMutation, useGetAllSkillsQuery } from "../../redux/features/SkillsEndPoints";
// import Loader from "../../layouts/layoutcomponents/loader";

export default function DeleteSkill() {
    const dispatch = useDispatch();
    const { isOpen, data } = useSelector((state) => state.allCommonModal);

    // Uncomment if using an API to delete skills
    // const [deleteSkill, { isLoading: loading }] = useDeleteSkillMutation();
    // const { refetch } = useGetAllSkillsQuery();

    const handleDelete = async () => {
        // try {
        //     const res = await deleteSkill(data.id);
        //     if (res?.data?.http_status_code === 200) {
        //         dispatch(closeModal());
        //         refetch(); // Refresh skills list
        //         toast.success(res.data.message);
        //     }
        // } catch (error) {
        //     console.error("Error deleting skill", error);
        //     toast.error("Failed to delete skill");
        // }
    };

    return (
        <>
            {/* {loading && <Loader />} */}
            <Modal show={isOpen}>
                <Modal.Header className="bg-danger">
                    <Modal.Title as="h4" className="fw-semibold lh-1 my-auto text-center text-light">
                        Delete Skill
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete this skill data?</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-end">
                    <Button className="border" variant="secondary" onClick={() => dispatch(closeModal())}>
                        Cancel
                    </Button>
                    <Button className="btn btn-danger" variant="danger" onClick={() => handleDelete()}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
