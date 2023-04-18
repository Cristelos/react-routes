import { useForm } from "react-hook-form"

export default function ContactPage(){

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    } 

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")}/>
                <input type="text" {...register("surname")}/>
                <textarea {...register("description")}/>
                <select {...register("selecciona")}> 
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <button>Enviar</button>
            </form>
        </div>
    )
}