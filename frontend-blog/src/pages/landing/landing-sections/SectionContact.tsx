import { FC } from 'react'
import { useForm } from "react-hook-form";

const SectionContact: FC = () => {
    const { register,
        handleSubmit, 
        watch, 
        formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="w-1/2 mx-auto text-left pt-32">
            <h2 className="lg:text-2xl font-semibold">Contáctanos</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="test" {...register("example")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    )
}

export default SectionContact