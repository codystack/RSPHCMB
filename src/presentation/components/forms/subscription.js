import React from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { db, doc, setDoc } from "../../../data/firebase";

const useStyles = makeStyles((theme) => ({
  image: {
    margin: "0px auto 15px auto",
    width: 128,
    height: 100,
  },
  mb: {
    marginBottom: 10,
  },
}));

const SubscriptionForm = (props) => {
  const classes = useStyles();
  let { setOpen } = props;
  const [formValues, setFormValues] = React.useState({
    email: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevData) => ({ ...prevData, [name]: value }));
  };

  const updateNews = async (e) => {
    setIsLoading(true);
    const timeNow = new Date();

    setDoc(doc(db, "subscriptions", `${timeNow.getTime()}`), {
      id: timeNow.getTime(),
      email: formValues.email,
    })
      .then((res) => {
        setOpen(false);
        setIsLoading(false);
        //   enqueueSnackbar(`New category added successfully`, {
        //     variant: "success",
        //   });
      })
      .catch((error) => {
        setOpen(false);
        setIsLoading(false);
      });
  };

  return (
    <div
      style={{
        paddingTop: 32,
        paddingBottom: 32,
        paddingLeft: 24,
        paddingRight: 24,
      }}
    >
      {/* <Backdrop style={{ zIndex: 1200 }} open={isLoading}>
        {isLoading ? (
          <CircularProgress
            size={90}
            thickness={3.0}
            style={{ color: "white" }}
          />
        ) : (
          <div />
        )}
      </Backdrop> */}
      <ValidatorForm onSubmit={updateNews}>
        <TextValidator
          className={classes.mb}
          label="Email"
          size="small"
          variant="outlined"
          value={formValues.email}
          onChange={handleChange}
          name="email"
          fullWidth
          required
          type="email"
          validators={["required", "isEmail"]}
          errorMessages={[
            "Email Address field is required",
            "Email Address is not valid",
          ]}
        />
        <br />
        <Button
          disableElevation={true}
          sx={{ textTransform: "capitalize", color: "white" }}
          type="submit"
          variant="contained"
          disabled={isLoading}
          fullWidth
        >
          Subscribe Now
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default SubscriptionForm;
