import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { LogoBox } from "../../components/LogoContainer";
import { IvantyWoman } from "../../components/IvantyWoman";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "No minimo 8 caracteres")
      .required("Campo obrigatório"),
    username: yup.string().required("Campo obrigatório"),
    fullname: yup.string().required("Campo obrigatório"),
    birthdate: yup.date().required("Campo obrigatório").max(new Date(), "Você deve ser maior de idade"),
  })
  .required();

const Register = () => {
  const {
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const navigate = useNavigate();

  const handleRegister = () => {
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
          <Title>Cadastro</Title>
          <Spacing />
          <Input
            name="fullname"
            placeholder="Nome completo"
            control={control}
            errorMessage={errors?.fullname?.message}
          />
          <Spacing />
          <Input
            name="username"
            placeholder="Nome de usuário"
            control={control}
            errorMessage={errors?.username?.message}
          />
          <Spacing />
          <Input
            name="birthdate"
            type="date"
            placeholder="Data de nascimento"
            control={control}
            errorMessage={errors?.birthdate?.message}
          />
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
          <Button title="Cadastrar" disabled={!isValid} onClick={handleRegister}/>
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Register;
