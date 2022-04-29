import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";
import useLoginMutation from "../../Hooks/useLoginMutation";
import { useForm } from "react-hook-form";
import {
  getEmailValidationRules,
  getRequiredRules,
} from "src/Utils/Validators";

function LoginForm() {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const loginMutation = useLoginMutation();

  const onApply = handleSubmit((values) => {
    loginMutation.mutate(
      {
        ...values,
      },
      {
        onSuccess: (responseData) => {
          if (responseData) {
            console.log(responseData, "Data");
          }
        },
      }
    );
  });

  return (
    <Fragment>
      <Form onSubmit={onApply}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            {...register("email", getEmailValidationRules())}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", getRequiredRules("Password"))}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Fragment>
  );
}

export default LoginForm;
