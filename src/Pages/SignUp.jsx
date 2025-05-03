import { useCallback, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { usePocket } from "../context/PocketContext";


const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {register} = usePocket()
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    async (e) => {
      e?.preventDefault();
      await register(emailRef.current.value, passwordRef.current.value);
      navigate("/sign-in");
    },
    [register]
  );

  return (
    <section className=" fixed h-full w-full flex justify-center items-center">
      <form
        onSubmit={handleOnSubmit}
        className=" bg-sec h-150 w-150 rad drop flex flex-col justify-center gap-y-15 items-center"
      >
        <h2 className="font-JetBrains text-titlecolor text-5xl">(N)oty</h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-main text-xl">E-Mail</label>
          <input
            placeholder="max.mustermann@gmail.com"
            type="email"
            ref={emailRef}
            name="email"
            className=" p-3 bg-main rad w-138 h-[55px] text-hover focus:outline-none "
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="pass" className="text-main text-xl">Password</label>
          <input
            placeholder="Password"
            type="password"
            ref={passwordRef}
            name="pass"
            className="p-3 bg-main rad w-138 h-[55px] text-hover focus:outline-none"
          />
        </div>

        <div className="flex flex-row justify-evenly gap-x-7">
          <button
            type="submit"
            className=" bg-main rad text-hover w-3xs h-[55px]"
          >
            Sign Up
          </button>
          <Link
            to="/"
            className="bg-main rad text-hover w-3xs h-[55px] text-center"
          >
            Sign In
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SignUp;