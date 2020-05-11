import React, { Component } from "react";
import { Formik } from "formik";
import { TextField, Button } from "@material-ui/core";
import { string, object } from "yup";
import emailjs from "emailjs-com";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      didSubmit: false,
    };
  }
  render() {
    return (
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={object({
          name: string().required("Please provide your full name").min(2),
          email: string()
            .email("Please provide a valid email")
            .required("Please provide a valid email"),
          message: string().required(),
        })}
        onSubmit={(values, { resetForm }) => {
          emailjs
            .sendForm(
              "gmail",
              "client-email",
              "#client-form",
              "user_uLlJ1kdWam4zanzfMFPDE"
            )
            .then(() => {
              resetForm({});
              if (!this.state.didSubmit) {
                this.setState({ didSubmit: !this.state.didSubmit });
              }
            })
            .catch(() => {
              resetForm({});
              if (this.state.didSubmit) {
                this.setState({ didSubmit: !this.state.didSubmit });
              }
              const acknowledgement = document.createElement("H6");
              acknowledgement.innerHTML =
                "Something went wrong, please try again.";
              document
                .getElementById("client-form")
                .appendChild(acknowledgement);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValidating,
          isValid,
          dirty,
        }) => (
          <form
            style={{
              margin: "0 auto",
              width: "80%",
              border: "2px solid black",
              textAlign: "center",
              padding: "30px 5px 30px",
            }}
            onSubmit={handleSubmit}
            id="client-form"
          >
            <div className="container">
              <div className="col-12 pb-2">
                <TextField
                  label="FULL NAME"
                  variant="filled"
                  size="small"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  name="name"
                  error={errors.name && touched.name}
                  fullWidth
                />
                {errors.name && touched.name ? (
                  <div style={{ color: "red" }}>{errors.name}</div>
                ) : null}
              </div>
              <div className="col-12 pb-2">
                <TextField
                  label="EMAIL"
                  variant="filled"
                  size="small"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  fullWidth
                  error={errors.email && touched.email}
                />
                {errors.email && touched.email ? (
                  <div style={{ color: "red" }}>{errors.email}</div>
                ) : null}
              </div>
              <div className="col-12 pb-2">
                <TextField
                  label="MESSAGE"
                  variant="outlined"
                  size="small"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.message}
                  name="message"
                  multiline
                  rows={9}
                  error={errors.message && touched.message}
                  fullWidth
                  helperText="Maximum 1000 characters"
                  inputProps={{ maxLength: 1000 }}
                />
              </div>
              <Button
                disabled={isSubmitting || isValidating || !isValid || !dirty}
                variant="outlined"
                type="submit"
              >
                SUBMIT
              </Button>
              {this.state.didSubmit ? (
                <h3
                  style={{
                    marginBottom: 0,
                    paddingTop: "1rem",
                    fontFamily: "pacifico, cursive",
                  }}
                >
                  Thank
                  <br />
                  you!
                </h3>
              ) : null}
            </div>
          </form>
        )}
      </Formik>
    );
  }
}

export default MessageForm;
