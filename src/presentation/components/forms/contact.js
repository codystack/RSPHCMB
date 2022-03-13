import React from "react";
// import { makeStyles } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Grid, TextField } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//   },
//   formRoot: {
//     "& > *": {
//       margin: "8px auto",
//       width: "100%",
//     },
//   },
//   paperRoot: {
//     padding: theme.spacing(3),
//   },
//   backButton: {
//     marginRight: theme.spacing(1),
//   },
//   instructions: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//   },
//   stepper: {
//     //   backgroundColor:
//     borderRadius: theme.shape.borderRadius,
//   },
//   label: {
//     fontSize: "1.1em",
//     fontWeight: 600,
//   },
//   alternativeLabel: {
//     color: theme.palette.primary,
//   },
//   MuiAvatar: {
//     margin: "0px auto 15px auto",
//     width: 100,
//     height: 100,
//   },
// }));

const ContactForm = () => {
  const submitForm = async (e) => {
    // // e.preventDefault();
    // setIsSubmitting(true);
    // try {
    //   const resp = await APIService.contactUs(
    //     formValues.Surname,
    //     formValues.First_Name,
    //     formValues.Email_Address,
    //     formValues.Phone_Number,
    //     formValues.Subject
    //   );
    //   if (resp.status === 200) {
    //     clearForm();
    //     setIsSubmitting(false);
    //     enqueueSnackbar(`Message sent successfully`, { variant: "success" });
    //   } else {
    //     setIsSubmitting(false);
    //   }
    // } catch (err) {
    //   enqueueSnackbar(
    //     `${
    //       err?.response?.data?.error ||
    //       err?.response?.statusText ||
    //       "Check your internet connection."
    //     }`,
    //     { variant: "error" }
    //   );
    //   setIsSubmitting(false);
    // }
  };

  return (
    <div>
      {/* <Backdrop
        style={{ zIndex: 1200 }}
        //   open={isSubmitting}
      >
        <CircularProgress
          size={90}
          thickness={3.0}
          style={{ color: "white" }}
        />
      </Backdrop> */}

      <form
        onSubmit={submitForm}
        // className={classes.formRoot}
        // ref={formRef}
      >
        <TextField
          required
          fullWidth
          margin="dense"
          placeholder="Full Name"
          name="Surname"
          label="Full Name"
          variant="outlined"
          validators={["required"]}
          errorMessages={["Full name is required"]}
        />

        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              required
              id="Email_Address"
              label="Email"
              variant="outlined"
              name="Email_Address"
              type="email"
              margin="dense"
              fullWidth
              validators={["required", "isEmail"]}
              errorMessages={[
                "Email address field is required",
                "Email address is not valid",
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <TextField
              required
              name="Phone_Number"
              label="Phone Number"
              variant="outlined"
              fullWidth
              margin="dense"
              validators={["required", "isNumber"]}
              errorMessages={[
                "Phone Number is required",
                "Invalid Phone Number",
              ]}
            />
          </Grid>
        </Grid>

        <TextField
          required
          fullWidth
          margin="dense"
          placeholder="Subject"
          name="Subject"
          label="Subject"
          variant="outlined"
          validators={["required"]}
          errorMessages={["Subject is required"]}
        />

        <TextField
          required
          fullWidth
          margin="dense"
          multiline
          rows={6}
          rowsMax={10}
          placeholder="Type message"
          name="Request"
          label="Request"
          value=""
          variant="outlined"
          validators={["required"]}
          errorMessages={["Message is required"]}
        />
      </form>
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#012F74",
            color: "white",
            paddingX: 4,
            marginY: 2,
            textTransform: "capitalize",
          }}
          // onClick={}
        >
          Send Request
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
