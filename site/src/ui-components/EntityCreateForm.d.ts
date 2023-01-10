/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EntityCreateFormInputValues = {
    name?: string;
    phone?: string;
    email?: string;
    fiscal_id?: string;
    public?: boolean;
};
export declare type EntityCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    fiscal_id?: ValidationFunction<string>;
    public?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EntityCreateFormOverridesProps = {
    EntityCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    fiscal_id?: PrimitiveOverrideProps<TextFieldProps>;
    public?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type EntityCreateFormProps = React.PropsWithChildren<{
    overrides?: EntityCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EntityCreateFormInputValues) => EntityCreateFormInputValues;
    onSuccess?: (fields: EntityCreateFormInputValues) => void;
    onError?: (fields: EntityCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EntityCreateFormInputValues) => EntityCreateFormInputValues;
    onValidate?: EntityCreateFormValidationValues;
} & React.CSSProperties>;
export default function EntityCreateForm(props: EntityCreateFormProps): React.ReactElement;
