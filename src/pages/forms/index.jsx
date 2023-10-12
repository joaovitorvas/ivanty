import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { IvantyWoman } from "../../components/IvantyWoman";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "No minimo 8 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const {
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    if (isValid) {
      console.log('OK');
      navigate('/');
    }
  };

  return (
    <Container>
      <LoginContainer>
        <Column>
          <IvantyWoman/>
          <Title>Login</Title>
          <Spacing />
          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMessage={errors?.email?.message}
          />
          <Spacing />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
          />
          <Spacing />
          <Button title="Entrar" disabled={!isValid} onClick={handleLogin}/>
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
