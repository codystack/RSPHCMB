import React from "react";
// import { makeStyles } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Grid, TextField } from "@mui/material";
import { useSnackbar } from "notistack";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { db, setDoc, doc } from "../../../data/firebase";

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
  const [isLoading, setIsLoading] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    fullname: "",
    email: "",
    phone: "",
    subject: "",
    request: "",
  });

  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevData) => ({ ...prevData, [name]: value }));
  };

  const addContact = async (e) => {
    setIsLoading(true);
    const timeNow = new Date();

    // const mRef = doc(db, "enquiries", "" + timeNow.getTime());

    try {
      setDoc(doc(db, "enquiries", "" + timeNow.getTime()), {
        id: timeNow.getTime(),
        fullname: formValues.fullname,
        phone: formValues.phone,
        email: formValues.email,
        subject: formValues.subject,
        request: formValues.request,
        createdAt: timeNow,
        updatedAt: timeNow,
      })
        .then(async (result) => {
          setIsLoading(false);
          enqueueSnackbar(`Request submitted successfully`, {
            variant: "success",
          });
        })
        .catch((err) => {
          setIsLoading(false);
          enqueueSnackbar(
            `${err?.message || "Check your internet connection"}`,
            {
              variant: "error",
            }
          );
        });
    } catch (error) {
      setIsLoading(false);
      enqueueSnackbar(`${error?.message || "Check your internet!"}`, {
        variant: "error",
      });
    }
  };

  return (
    <div>
      <ValidatorForm onSubmit={addContact}>
        <TextValidator
          required
          fullWidth
          margin="dense"
          placeholder="Full Name"
          name="fullname"
          label="Full Name"
          value={formValues.fullname}
          onChange={handleChange}
          variant="outlined"
          validators={["required"]}
          errorMessages={["Full name is required"]}
        />

        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={6}>
            <TextValidator
              required
              label="Email"
              variant="outlined"
              name="email"
              type="email"
              margin="dense"
              fullWidth
              onChange={handleChange}
              value={formValues.email}
              validators={["required", "isEmail"]}
              errorMessages={[
                "Email address field is required",
                "Email address is not valid",
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <TextValidator
              required
              name="phone"
              label="Phone Number"
              variant="outlined"
              fullWidth
              value={formValues.phone}
              margin="dense"
              onChange={handleChange}
              validators={["required", "isNumber"]}
              errorMessages={[
                "Phone Number is required",
                "Invalid Phone Number",
              ]}
            />
          </Grid>
        </Grid>

        <TextValidator
          required
          fullWidth
          value={formValues.subject}
          margin="dense"
          placeholder="Subject"
          name="subject"
          label="Subject"
          variant="outlined"
          onChange={handleChange}
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
          name="request"
          label="Request"
          onChange={handleChange}
          value={formValues.request}
          variant="outlined"
          validators={["required"]}
          errorMessages={["Message is required"]}
        />

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
            type="submit"
            variant="contained"
            disabled={isLoading}
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
      </ValidatorForm>
    </div>
  );
};

export default ContactForm;
