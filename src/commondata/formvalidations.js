import * as Yup from "yup";

export const UserLoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Enter a valid email address")
        .required("This field is required"),
    password: Yup.string().required("This field is required"),
});


export const AddPageValidation = Yup.object().shape({
    type: Yup.string().required("This field is required."),
    status: Yup.string().required("This field is required."),
    title: Yup.string().required("This field is required."),
    content: Yup.string().required("This field is required.")
    // confirm_password: Yup.string().required("This field is required."),
})

export const AddSkillValidation = Yup.object().shape({
    name: Yup.string().required("Name is required."),
    status: Yup.string().required("Status is required."),
});

export const AddPlanSchemaValidation = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        description: Yup.string().required("Description is required"),
        duration: Yup.string().required("Duration is required"),
        price: Yup.number().required("Price is required").positive("Price must be a positive number"),
        level: Yup.string().required("Level is required")
    });

export const MessageSchema = Yup.object().shape({
    message: Yup.string().required("This field is required."),
});

export const QuotesSchema = Yup.object().shape({
    content: Yup.string().required("This field is required."),
});

export const AddPaymentValidation = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    image: Yup.mixed().required("Image is required"),
    isPrimary: Yup.boolean().required("Primary status is required"),
});

export const AddTransactionValidation = Yup.object().shape({
    description: Yup.string().required("Description is required"),
    amount: Yup.number()
        .typeError("Amount must be a number")
        .positive("Amount must be positive")
        .required("Amount is required"),
    date: Yup.date()
        .typeError("Invalid date format")
        .required("Date is required"),
    isRecurring: Yup.boolean()
});


