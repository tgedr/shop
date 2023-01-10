/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ConfigurationCreateFormInputValues = {
    key?: string;
    value_float?: number;
    value_string?: string;
};
export declare type ConfigurationCreateFormValidationValues = {
    key?: ValidationFunction<string>;
    value_float?: ValidationFunction<number>;
    value_string?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConfigurationCreateFormOverridesProps = {
    ConfigurationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    key?: PrimitiveOverrideProps<TextFieldProps>;
    value_float?: PrimitiveOverrideProps<TextFieldProps>;
    value_string?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ConfigurationCreateFormProps = React.PropsWithChildren<{
    overrides?: ConfigurationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ConfigurationCreateFormInputValues) => ConfigurationCreateFormInputValues;
    onSuccess?: (fields: ConfigurationCreateFormInputValues) => void;
    onError?: (fields: ConfigurationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConfigurationCreateFormInputValues) => ConfigurationCreateFormInputValues;
    onValidate?: ConfigurationCreateFormValidationValues;
} & React.CSSProperties>;
export default function ConfigurationCreateForm(props: ConfigurationCreateFormProps): React.ReactElement;
