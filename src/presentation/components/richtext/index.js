import React from "react";
import MUIRichTextEditor from "mui-rte";
import { convertToRaw } from "draft-js";
import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@mui/material/styles";

const defaultTheme = createMuiTheme();

Object.assign(defaultTheme, {
  overrides: {
    MUIRichTextEditor: {
      root: {
        marginBottom: 10,
        width: "100%",
      },
      container: {
        height: "100%",
        border: "1px solid rgba(0, 0, 0, 0.23)",
        borderRadius: 6,
        padding: 15,
        overflow: "auto",
      },
      editorContainer: {
        position: "relative !important",
        marginBottom: 20,
      },
    },
  },
});

const RichText = (props) => {
  //   const { value, setFormData } = props;
  const { setValue, setError, error, setIsStartedFilling, description } = props;

  const handleChange = (state) => {
    const data = JSON.stringify(convertToRaw(state.getCurrentContent()));

    if (error) {
      setError(false);
    }

    if (state.getCurrentContent().hasText()) {
      setIsStartedFilling(true);
      setValue(data);
    }
  };

  const save = (data) => {
    // save this data somewhere
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <MUIRichTextEditor
        controls={[
          "title",
          "bold",
          "italic",
          "underline",
          "strikethrough",
          "highlight",
          "undo",
          "redo",
          "link",
          "media",
          "numberList",
          "bulletList",
          "quote",
          "code",
          "clear",
          "save",
        ]}
        // defaultValue={value}
        error={error}
        label={description}
        toolbarButtonSize="small"
        inlineToolbar={true}
        onSave={save}
        onChange={handleChange}
      />
    </ThemeProvider>
  );
};

export default RichText;
