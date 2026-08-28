import { useForm, type SubmitHandler } from "react-hook-form";
import { ActionButton } from "../components/ui/ActionButton";
import FormGroup from "../components/ui/FormGroup";
import {
  loginUserSchema,
  type LoginUserValues,
} from "../features/users/types/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "../features/users/api/userApi";
import { useUserStore } from "../store/useUserStore";
import { ValidateMessage } from "../components/ui/ValidateMessage";
import { useNavigate } from "react-router-dom";
import LoginIcon from "../components/icons/LoginIcon";

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useUserStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<LoginUserValues>({
    resolver: zodResolver(loginUserSchema),
  });
  const onSubmit: SubmitHandler<LoginUserValues> = async (
    loginData: LoginUserValues,
  ) => {
    try {
      const user = await loginUser(loginData);
      login(user);
      reset();
      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        setError("root", { message: err.message });
      }
    }
  };
  return (
    <main className="flex flex-col p-5 justify-center items-center gap-4 min-w-1/2">
      <h2>LOGIN</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className=" bg-slate-500 rounded-2xl flex flex-col gap-4 min-w-1/2 p-5"
      >
        <FormGroup>
          <label htmlFor="email">EMAIL:</label>
          <input id="email" type="email" {...register("email")} />
          {errors.email && <ValidateMessage message={errors.email.message} />}
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">PASSWORD:</label>
          <input id="password" type="password" {...register("password")} />
          {errors.password && (
            <ValidateMessage message={errors.password.message} />
          )}
        </FormGroup>
        {errors.root && <ValidateMessage message={errors.root.message} />}
        <ActionButton type="submit" disabled={false}>
          LOGIN
          <LoginIcon className="w-6 h-6" />
        </ActionButton>
      </form>
    </main>
  );
}
