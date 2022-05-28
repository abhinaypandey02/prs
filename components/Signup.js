import secure_login from "../assets/secure_login.svg";
import apartment from "../assets/apartment.svg";
import building from "../assets/building.svg";
import { useForm } from "react-hook-form";
import { getErrorMessage } from "../helpers";
export default function Login() {
  const { register, handleSubmit,setError, getValues, formState: { errors } } = useForm();
  const onSubmit = data => {
    //custom validations
    let clean=true;
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)){
      setError("email",{type:"emailPattern"});
      clean=false;
    }
    if(!clean) return; 

    console.log(data)
    alert("FORM OK!")
  };
  return (
    <div className="container py-4">
      <div className="row g-0 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <img
            src={secure_login.src}
            className="w-100 rounded-4 shadow-4"
            alt=""
          />
        </div>
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card cascading-right backdrop-blur">
            <div className="card-body p-5">
              <h2 className="mb-5" style={{ fontWeight: "bold" }}>
                SIGN UP TO PRC
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="firstName"
                        className="form-control"
                        {...register("firstName",{required:true})}
                      />
                      <label className="form-label small" htmlFor="firstName">
                        First name {errors.firstName&&<span className="text-danger">{getErrorMessage(errors.firstName.type)}</span>}
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="lastName"
                        className="form-control"
                        {...register("lastName",{required:true})}
                      />
                      <label className="form-label small" htmlFor="lastName">
                        Last name {errors.lastName&&<span className="text-danger">{getErrorMessage(errors.lastName.type)}</span>}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="email" className="form-control" {...register("email",{required:true})}/>
                  <label className="form-label small" htmlFor="email">
                    Email address {errors.email&&<span className="text-danger">{getErrorMessage(errors.email.type)}</span>}
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    {...register("password",{required:true,minLength:6})}
                  />
                  <label className="form-label small" htmlFor="password" >
                    Password {errors.password&&<span className="text-danger">{getErrorMessage(errors.password.type)}</span>}
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="confirmPassword"
                    className="form-control"
                    {...register("confirmPassword",{required:true,minLength:6,validate:{
                      passwordMismatch:(v)=> v===getValues("password")
                    }})}
                  />
                  <label className="form-label small" htmlFor="password" >
                    Confirm Password {errors.confirmPassword&&<span className="text-danger">{getErrorMessage(errors.confirmPassword.type)}</span>}
                  </label>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="agreement"
                    defaultChecked={true}
                  />
                  <label className="form-check-label" htmlFor="agreement">
                    I agree with the terms & conditions
                  </label>
                </div>
                <div
                  className="buttonDiv"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4 me-4"
                  >
                    Sign up
                  </button>
                  <button
                    type="reset"
                    className="btn btn-secondary btn-block mb-4"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
