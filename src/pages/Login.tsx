import { Button } from "antd";
import { useForm } from "react-hook-form";
import { authApi } from "../redux/fetures/auth/authApi";
import { verifyToken } from "../utils/verifyToken";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/fetures/auth/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const { handleSubmit, register } = useForm();
  const [login] = authApi.useLoginMutation();

  const onSubmit = async (data) => {
    const result = await login(data).unwrap();
    const token = result.data.accessToken;
    const user = verifyToken(token);
    console.log(user);
    console.log(token);
    dispatch(setUser({ user, token }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ margin: "100px" }}>
      <div>
        <label htmlFor="id">ID</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Submit</Button>
    </form>
  );
};

export default Login;
