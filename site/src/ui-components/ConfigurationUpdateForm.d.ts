/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Configuration } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ConfigurationUpdateFormInputValues = {
    key?: string;
    value_float?: number;
    value_string?: string;
};
export declare type ConfigurationUpdateFormValidationValues = {
    key?: ValidationFunction<string>;
    value_float?: ValidationFunction<number>;
    value_string?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConfigurationUpdateFormOverridesProps = {
    ConfigurationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    key?: PrimitiveOverrideProps<TextFieldProps>;
    value_float?: PrimitiveOverrideProps<TextFieldProps>;
    value_string?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ConfigurationUpdateFormProps = React.PropsWithChildren<{
    overrides?: ConfigurationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    configuration?: Configuration;
    onSubmit?: (fields: ConfigurationUpdateFormInputValues) => ConfigurationUpdateFormInputValues;
    onSuccess?: (fields: ConfigurationUpdateFormInputValues) => void;
    onError?: (fields: ConfigurationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConfigurationUpdateFormInputValues) => ConfigurationUpdateFormInputValues;
    onValidate?: ConfigurationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ConfigurationUpdateForm(props: ConfigurationUpdateFormProps): React.ReactElement;
