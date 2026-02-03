/* ================== START: Imports ================== */
import * as yup from "yup";
/* ================== END: Imports ================== */

/* ================== START: Schema ================== */
export const userSchema = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    message: yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters")
        .max(1000, "Message must not exceed 1000 characters")
}).required();
/* ================== END: Schema ================== */