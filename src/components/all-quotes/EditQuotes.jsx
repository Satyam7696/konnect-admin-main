import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../redux/slices/allModalSlice';
import { MessageSchema, QuotesSchema } from '../../commondata/formvalidations';
import toast from 'react-hot-toast';
import Loader from '../../layouts/layoutcomponents/loader';
// import { useAllQuotesQuery, useUpdateQuotesMutation } from '../../redux/features/adminQuotesEndPoint';

export default function EditQuotes() {
    const dispatch = useDispatch();
    const { isOpen, data } = useSelector((state) => state.allCommonModal);

    // const [addMessage, { isLoading: loading }] = useUpdateQuotesMutation()

    const initialValues = {
        content: "",
        status: true
    }

    // const { refetch } = useAllQuotesQuery()
    const { errors, values, touched, handleChange, handleBlur, handleSubmit, setFieldValue } = useFormik({
        initialValues: initialValues,
        validationSchema: QuotesSchema,
        onSubmit: async (values) => {
            // try {

            //     const resp = await addMessage({ quotesId: data?.id, quoteBody: values })

            //     if (resp?.data?.http_status_code === 200) {
            //         refetch()
            //         dispatch(closeModal())
            //         toast.success(resp?.data?.message)
            //     } else {
            //         toast.error(resp?.data?.message)
            //     }

            // } catch (err) {
            //     toast.error(err.message)
            // }
        },
    });

    // useEffect(() => {
    //     setFieldValue("content", data?.content)
    //     setFieldValue("status", data?.status)
    // }, [data])

    return (
        <>
            {/* {
                loading && <Loader />
            } */}
            <Modal show={isOpen}>
                <Modal.Header className='bg-primary'>
                    <Modal.Title className='text-light'>
                        Edit Quotes
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                value={values.content}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="content"
                                className="border border-black rounded-3 w-100"
                            />
                            {errors.content && touched.content ? (
                                <p className='text-danger'>{errors.content}</p>
                            ) : null}
                        </Form.Group>
                        {/* <Form.Group>
                            <Form.Label>Status</Form.Label>
                            <Form.Select name='status' value={values.status} onChange={handleChange} onBlur={handleBlur}>
                                <option value="false">Inactive</option>
                                <option value="true">Active</option>
                            </Form.Select>
                        </Form.Group> */}
                        <Modal.Footer className='mb-0'>
                            <Button type='submit'>
                                Update
                            </Button>
                            <Button variant='secondary' onClick={() => dispatch(closeModal())}>
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    );
}
