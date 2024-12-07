import { useForm, SubmitHandler } from "react-hook-form"

interface Inputs {
  firstName: string
  lastName: string
}

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  const exampleValue = watch("firstName")

  console.log(exampleValue) // watch input value by passing the name of it

  console.log(errors.lastName)

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("firstName")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("lastName", { required: true, minLength: 5 })} />
      {/* errors will return when field validation fails  */}
      {errors.lastName?.type == "required" && <span>Bu alan zorunlu</span>}
      {errors.lastName?.type == "minLength" && <span>En az 5 karakter girilebilşr</span>}

      <input type="submit" />
    </form>
  )
}