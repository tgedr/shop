/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Configuration } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ConfigurationUpdateForm(props) {
  const {
    id: idProp,
    configuration,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    key: "",
    value_float: "",
    value_string: "",
  };
  const [key, setKey] = React.useState(initialValues.key);
  const [value_float, setValue_float] = React.useState(
    initialValues.value_float
  );
  const [value_string, setValue_string] = React.useState(
    initialValues.value_string
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = configurationRecord
      ? { ...initialValues, ...configurationRecord }
      : initialValues;
    setKey(cleanValues.key);
    setValue_float(cleanValues.value_float);
    setValue_string(cleanValues.value_string);
    setErrors({});
  };
  const [configurationRecord, setConfigurationRecord] =
    React.useState(configuration);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Configuration, idProp)
        : configuration;
      setConfigurationRecord(record);
    };
    queryData();
  }, [idProp, configuration]);
  React.useEffect(resetStateValues, [configurationRecord]);
  const validations = {
    key: [{ type: "Required" }],
    value_float: [],
    value_string: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          key,
          value_float,
          value_string,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Configuration.copyOf(configurationRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ConfigurationUpdateForm")}
      {...rest}
    >
      <TextField
        label="Key"
        isRequired={true}
        isReadOnly={false}
        value={key}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              key: value,
              value_float,
              value_string,
            };
            const result = onChange(modelFields);
            value = result?.key ?? value;
          }
          if (errors.key?.hasError) {
            runValidationTasks("key", value);
          }
          setKey(value);
        }}
        onBlur={() => runValidationTasks("key", key)}
        errorMessage={errors.key?.errorMessage}
        hasError={errors.key?.hasError}
        {...getOverrideProps(overrides, "key")}
      ></TextField>
      <TextField
        label="Value float"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={value_float}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              key,
              value_float: value,
              value_string,
            };
            const result = onChange(modelFields);
            value = result?.value_float ?? value;
          }
          if (errors.value_float?.hasError) {
            runValidationTasks("value_float", value);
          }
          setValue_float(value);
        }}
        onBlur={() => runValidationTasks("value_float", value_float)}
        errorMessage={errors.value_float?.errorMessage}
        hasError={errors.value_float?.hasError}
        {...getOverrideProps(overrides, "value_float")}
      ></TextField>
      <TextField
        label="Value string"
        isRequired={false}
        isReadOnly={false}
        value={value_string}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              key,
              value_float,
              value_string: value,
            };
            const result = onChange(modelFields);
            value = result?.value_string ?? value;
          }
          if (errors.value_string?.hasError) {
            runValidationTasks("value_string", value);
          }
          setValue_string(value);
        }}
        onBlur={() => runValidationTasks("value_string", value_string)}
        errorMessage={errors.value_string?.errorMessage}
        hasError={errors.value_string?.hasError}
        {...getOverrideProps(overrides, "value_string")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || configuration)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || configuration) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
