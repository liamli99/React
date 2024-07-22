import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function Form() {
    const schema = yup.object().shape({
        fullName: yup.string().required("Full name is required!"),
        email: yup.string().email("Invalid Email!").required("Email is required!"),
        age: yup.number().integer("Age must be an integer!").min(18, "You must be at least 18 years old!").required("Age is required!"),
        password: yup.string().min(6, "Password must be at least 6 characters!").max(20, "Password must be at least 20 characters!").required("Password is required!"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password must match!").required("Confirm password is required!")
    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name" {...register("fullName")} />
            {/* The <p> tag only exists when the error.fullName exists */}
            {/* {errors.fullName && <p>{errors.fullName.message}</p>} */}

            {/* The <p> tag always exists in the DOM */}
            <p>{errors.fullName?.message}</p>

            <input type="text" placeholder="Email" {...register("email")} />
            <p>{errors.email?.message}</p>

            <input type="number" placeholder="Age" {...register("age")} />
            <p>{errors.age?.message}</p>

            <input type="password" placeholder="Password" {...register("password")} />
            <p>{errors.password?.message}</p>

            <input type="password" placeholder="Confirm Passworm" {...register("confirmPassword")} />
            <p>{errors.confirmPassword?.message}</p>

            <input type="submit" />
        </form>
    )
}

export default Form;