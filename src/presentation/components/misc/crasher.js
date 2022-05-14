import React from "react";
import Button from "@mui/material/Button";
import { updateDoc, doc, db, onSnapshot } from "../../../data/firebase";
import { useDispatch } from "react-redux";
import { setMisc } from "../../../data/redux/slice/misc";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const Crasher = () => {
  const [formValues, setFormValues] = React.useState({
    name: "",
  });
  const [isLoading, setLoading] = React.useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevData) => ({ ...prevData, [name]: value }));
  };

  const submit = async (e) => {
    setLoading(true);
    const mRef = doc(db, "home", "misc");
    try {
      await updateDoc(mRef, {
        crash: formValues.name === "yes" ? true : false,
      });
      onSnapshot(doc(db, "home", "misc"), (doc) => {
        dispatch(setMisc(doc.data()));
      });
      setLoading(false);
    } catch (e) {}
  };

  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ValidatorForm onSubmit={submit}>
        <TextValidator
          name="name"
          value={formValues.name}
          label="Crash?"
          size="small"
          variant="outlined"
          onChange={handleChange}
          fullWidth={true}
          required
          placeholder="Enter \'yes\' or \'no\'"
          validators={["required"]}
          errorMessages={["Value is required"]}
        />
        <Button
          disableElevation
          disabled={isLoading}
          sx={{ my: 2 }}
          variant="contained"
          type="submit"
        >
          Update
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default Crasher;
