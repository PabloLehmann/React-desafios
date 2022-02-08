import { useForm } from 'react-hook-form';
import { useContexto } from '../myContext/MyContext';

const Form = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const {formulario} = useContexto()
 

    const onSubmit =(data,e)=>{
        formulario(data.nombre, data.apellido, data.email)
        e.target.reset()
        
    }

    return <div>
            <h1>formulario</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='formStyle'>
                <input
                name="nombre"
                placeholder='nombre'
                {...register("nombre", {
                    required: {
                        value: true, 
                        message: 'Campo requerido'
                        }, 
                        maxLength: {
                            value: 10, 
                            message: 'No más de 10 carácteres!'
                            },
                        minLength: {
                            value: 2, 
                            message: 'Mínimo 2 carácteres'
                            }
                        })}

                         />
                        <span className='formSpan'>
                            {errors?.nombre?.message}
                        </span>

                <input
                name="apellido"
                placeholder='Apellido'
                {...register("apellido", {
                    required: {
                        value: true, 
                        message: 'Campo requerido'
                        }, 
                        maxLength: {
                            value: 15, 
                            message: 'No más de 15 carácteres!'
                            },
                        minLength: {
                            value: 2, 
                            message: 'Mínimo 2 carácteres'
                            }
                        })}

                         />
                         <span className='formSpan'>
                             {errors?.apellido?.message}
                         </span>

                    <input
                name="email"
                placeholder='Email'
                {...register("email", {
                    required: {
                        value: true, 
                        message: 'Campo requerido'
                        }, 
                        
                        minLength: {
                            value: 2, 
                            message: 'Mínimo 2 carácteres'
                            }
                        })}

                         />
                        <span className='formSpan'>
                            {errors?.email?.message}
                        </span>

                <button type="submit" >Enviar</button>

                
            </form>
        </div>;
};
export default Form
