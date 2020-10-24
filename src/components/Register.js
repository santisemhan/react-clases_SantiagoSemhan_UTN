import React from "react";
import useCustomForm from "./../utils/useCostumFrom";

// npm i @hookform/resolvers yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Register = () => {
  const schema = yup.object().shape({
    nombre: yup
      .string()
      .required("El campo es obligatorio")
      .min(5, "El minimo es de 5 caracterers"), //nombre va a ser un string requerido y minimo 5 caracteres
    email: yup.string().email().required("El campo es obligatorio"),
    nickname: yup.string().required("El campo es obligatorio"),
    //yup.array verificia si es array, yup.date verifica q es date , etc
  });

  const [values, handler] = useCustomForm(); // [estado del componente, handler del hook]

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const registro = (e) => {
    console.log("Te registraste capo");
  };

  // <form onSubmit={handleSubmit(registro)}> valida primero el shema y dsp hace registro

  return (
    <>
      <div className="row justify-content-center mt-5 mb-5">
        <div className="col-6">
          <form onSubmit={handleSubmit(registro)}>
            <div className="form-group">
              <input
                ref={register}
                className="form-control"
                type="text"
                placeholder="Nombre"
                name="nombre"
                onChange={handler}
                value={values.nombre || ""} // si no tiene valor va invisible
              />
              <label className="text-danger">{errors.nombre?.message}</label>
            </div>
            <div className="form-group">
              <input
                ref={register}
                className="form-control"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handler}
                value={values.email || ""} // si no tiene valor va invisible
              />
              <label className="text-danger">{errors.email?.message}</label>
            </div>
            <div className="form-group">
              <input
                ref={register}
                className="form-control"
                type="text"
                placeholder="Nickname"
                name="nickname"
                onChange={handler}
                value={values.nickname || ""} // si no tiene valor va invisible
              />
              <label className="text-danger">{errors.nickname?.message}</label>
            </div>
            <button name="registrar" className="btn btn-primary" type="submit">
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
