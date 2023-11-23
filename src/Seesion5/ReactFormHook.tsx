import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  fullname: string;
  address: string;
  phone: number;
  city: string;
  gender: string;
  agree: boolean;
};

export default function MyForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    return console.log(data);
  };

  console.log(watch("fullname")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-[8px] m-5">
        <label htmlFor="fullname" className="text-2xl font-bold">
          Fullname
        </label>
        <input
          className="border-solid border-[1px] border-[black]"
          {...register("fullname", { required: true })}
          id="fullname"
        />
        {/* errors will return when field validation fails  */}
        {errors.fullname && <span>Fullname is required</span>}

        {/* ADDRESS */}
        <label className="text-2xl font-bold" htmlFor="address">
          Address
        </label>
        <input
          className="border-solid border-[1px] border-[black]"
          {...register("address")}
          id="address"
        />
        <label className="text-2xl font-bold" htmlFor="city">
          City
        </label>
        <select
          className="border-solid border-[1px] border-[black]"
          {...register("city")}
          id="city"
        >
          <option value="VN"> Viet Nam</option>
          <option value="JP"> Japan</option>
          <option value="KR">Korea</option>
        </select>
        <div>
          <label className="text-2xl font-bold" htmlFor="gender">
            Gender
          </label>
          <input
            className="ml-2 mr-[7px]"
            type="radio"
            radioGroup="gender"
            value="male"
            {...register("gender")}
          />
          Nam
          <input
            className="ml-2 mr-[7px]"
            type="radio"
            radioGroup="gender"
            value="female"
            {...register("gender")}
          />
          Nữ
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", marginLeft: "10px" }}
        >
          <input className="mr-[10px]" type="checkbox" {...register("agree")} />{" "}
          Tôi đồng ý các điều khoản
        </div>
        <button
          type="submit"
          className="  rounded border-solid border-[1px] border-[black]"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
