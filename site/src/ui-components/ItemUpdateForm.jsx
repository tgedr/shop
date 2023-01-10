/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Item } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ItemUpdateForm(props) {
  const {
    id: idProp,
    item,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    notes: "",
    price_eur: "",
    priority: "",
    active: false,
    width_mm: "",
    height_mm: "",
    length_mm: "",
    weight_g: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [price_eur, setPrice_eur] = React.useState(initialValues.price_eur);
  const [priority, setPriority] = React.useState(initialValues.priority);
  const [active, setActive] = React.useState(initialValues.active);
  const [width_mm, setWidth_mm] = React.useState(initialValues.width_mm);
  const [height_mm, setHeight_mm] = React.useState(initialValues.height_mm);
  const [length_mm, setLength_mm] = React.useState(initialValues.length_mm);
  const [weight_g, setWeight_g] = React.useState(initialValues.weight_g);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = itemRecord
      ? { ...initialValues, ...itemRecord }
      : initialValues;
    setName(cleanValues.name);
    setNotes(cleanValues.notes);
    setPrice_eur(cleanValues.price_eur);
    setPriority(cleanValues.priority);
    setActive(cleanValues.active);
    setWidth_mm(cleanValues.width_mm);
    setHeight_mm(cleanValues.height_mm);
    setLength_mm(cleanValues.length_mm);
    setWeight_g(cleanValues.weight_g);
    setErrors({});
  };
  const [itemRecord, setItemRecord] = React.useState(item);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Item, idProp) : item;
      setItemRecord(record);
    };
    queryData();
  }, [idProp, item]);
  React.useEffect(resetStateValues, [itemRecord]);
  const validations = {
    name: [{ type: "Required" }],
    notes: [],
    price_eur: [],
    priority: [],
    active: [{ type: "Required" }],
    width_mm: [],
    height_mm: [],
    length_mm: [],
    weight_g: [],
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
          name,
          notes,
          price_eur,
          priority,
          active,
          width_mm,
          height_mm,
          length_mm,
          weight_g,
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
            Item.copyOf(itemRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ItemUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              notes,
              price_eur,
              priority,
              active,
              width_mm,
              height_mm,
              length_mm,
              weight_g,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              notes: value,
              price_eur,
              priority,
              active,
              width_mm,
              height_mm,
              length_mm,
              weight_g,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
      ></TextField>
      <TextField
        label="Price eur"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={price_eur}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              notes,
              price_eur: value,
              priority,
              active,
              width_mm,
              height_mm,
              length_mm,
              weight_g,
            };
            const result = onChange(modelFields);
            value = result?.price_eur ?? value;
          }
          if (errors.price_eur?.hasError) {
            runValidationTasks("price_eur", value);
          }
          setPrice_eur(value);
        }}
        onBlur={() => runValidationTasks("price_eur", price_eur)}
        errorMessage={errors.price_eur?.errorMessage}
        hasError={errors.price_eur?.hasError}
        {...getOverrideProps(overrides, "price_eur")}
      ></TextField>
      <TextField
        label="Priority"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={priority}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              notes,
              price_eur,
              priority: value,
              active,
              width_mm,
              height_mm,
              length_mm,
              weight_g,
            };
            const result = onChange(modelFields);
            value = result?.priority ?? value;
          }
          if (errors.priority?.hasError) {
            runValidationTasks("priority", value);
          }
          setPriority(value);
        }}
        onBlur={() => runValidationTasks("priority", priority)}
        errorMessage={errors.priority?.errorMessage}
        hasError={errors.priority?.hasError}
        {...getOverrideProps(overrides, "priority")}
      ></TextField>
      <SwitchField
        label="Active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={active}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              notes,
              price_eur,
              priority,
              active: value,
              width_mm,
              height_mm,
              length_mm,
              weight_g,
            };
            const result = onChange(modelFields);
            value = result?.active ?? value;
          }
          if (errors.active?.hasError) {
            runValidationTasks("active", value);
          }
          setActive(value);
        }}
        onBlur={() => runValidationTasks("active", active)}
        errorMessage={errors.active?.errorMessage}
        hasError={errors.active?.hasError}
        {...getOverrideProps(overrides, "active")}
      ></SwitchField>
      <TextField
        label="Width mm"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={width_mm}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              notes,
              price_eur,
              priority,
              active,
              width_mm: value,
              height_mm,
              length_mm,
              weight_g,
            };
            const result = onChange(modelFields);
            value = result?.width_mm ?? value;
          }
          if (errors.width_mm?.hasError) {
            runValidationTasks("width_mm", value);
          }
          setWidth_mm(value);
        }}
        onBlur={() => runValidationTasks("width_mm", width_mm)}
        errorMessage={errors.width_mm?.errorMessage}
        hasError={errors.width_mm?.hasError}
        {...getOverrideProps(overrides, "width_mm")}
      ></TextField>
      <TextField
        label="Height mm"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={height_mm}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              notes,
              price_eur,
              priority,
              active,
              width_mm,
              height_mm: value,
              length_mm,
              weight_g,
            };
            const result = onChange(modelFields);
            value = result?.height_mm ?? value;
          }
          if (errors.height_mm?.hasError) {
            runValidationTasks("height_mm", value);
          }
          setHeight_mm(value);
        }}
        onBlur={() => runValidationTasks("height_mm", height_mm)}
        errorMessage={errors.height_mm?.errorMessage}
        hasError={errors.height_mm?.hasError}
        {...getOverrideProps(overrides, "height_mm")}
      ></TextField>
      <TextField
        label="Length mm"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={length_mm}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              notes,
              price_eur,
              priority,
              active,
              width_mm,
              height_mm,
              length_mm: value,
              weight_g,
            };
            const result = onChange(modelFields);
            value = result?.length_mm ?? value;
          }
          if (errors.length_mm?.hasError) {
            runValidationTasks("length_mm", value);
          }
          setLength_mm(value);
        }}
        onBlur={() => runValidationTasks("length_mm", length_mm)}
        errorMessage={errors.length_mm?.errorMessage}
        hasError={errors.length_mm?.hasError}
        {...getOverrideProps(overrides, "length_mm")}
      ></TextField>
      <TextField
        label="Weight g"
        isRequired={false}
        isReadOnly={false}
        value={weight_g}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              notes,
              price_eur,
              priority,
              active,
              width_mm,
              height_mm,
              length_mm,
              weight_g: value,
            };
            const result = onChange(modelFields);
            value = result?.weight_g ?? value;
          }
          if (errors.weight_g?.hasError) {
            runValidationTasks("weight_g", value);
          }
          setWeight_g(value);
        }}
        onBlur={() => runValidationTasks("weight_g", weight_g)}
        errorMessage={errors.weight_g?.errorMessage}
        hasError={errors.weight_g?.hasError}
        {...getOverrideProps(overrides, "weight_g")}
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
          isDisabled={!(idProp || item)}
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
              !(idProp || item) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
