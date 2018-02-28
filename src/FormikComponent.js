import React from 'react';
import { Container, Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';
import { withFormik } from 'formik';
import { lifecycle, compose } from 'recompose';

const isInvalidFactory = (touched, errors) => field => touched[field] && !!errors[field];

const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => {
  const isInvalid = isInvalidFactory(touched, errors);
  const inputProps = {onChange: handleChange, onBlur: handleBlur};
  return (
    <Container>
      <Form>
        <legend>User Form</legend>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            name="name"
            value={values.name}
            invalid={isInvalid('name')}
            { ...inputProps }
          />
          <FormFeedback>{errors.name}</FormFeedback>
          <FormText>Enter a name between 2 and 10 characters.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            name="email"
            value={values.email}
            invalid={isInvalid('email')}
            { ...inputProps }
          />
          <FormFeedback>{errors.email}</FormFeedback>
          <FormText>Enter a valid email.</FormText>
        </FormGroup>
        <Button
          color="primary"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

const FormikComponent = compose(
  lifecycle({
    componentDidMount() {
      this.props.fetchData();
    }
  }),
  withFormik({
    // Transform outer props into form values
    mapPropsToValues: props => ({ email: props.email, name: props.name }),
    enableReinitialize: true,
    // Add a custom validation function (this can be async too!)
    validate: (values, props) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Email is Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }

      if (!values.name) {
        errors.name = 'Name is Required';
      } else if (
        !/^[A-Z\s]{2,10}$/i.test(values.name)
      ) {
        errors.name = 'Name must be between 2 and 10 characters';
      }
      return errors;
    },
    // Submission handler
    handleSubmit: (
      values,
      {
        props,
        setSubmitting,
        setErrors /* setValues, setStatus, and other goodies */,
      }
    ) => {
      return props.submitForm(values)
       .then(() => setSubmitting(false));
    },
 })
)(InnerForm);

export default FormikComponent;
