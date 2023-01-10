/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Entity } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EntityUpdateFormInputValues = {
    name?: string;
    phone?: string;
    email?: string;
    fiscal_id?: string;
    public?: boolean;
};
export declare type EntityUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    fiscal_id?: ValidationFunction<string>;
    public?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EntityUpdateFormOverridesProps = {
    EntityUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    fiscal_id?: PrimitiveOverrideProps<TextFieldProps>;
    public?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type EntityUpdateFormProps = React.PropsWithChildren<{
    overrides?: EntityUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    entity?: Entity;
    onSubmit?: (fields: EntityUpdateFormInputValues) => EntityUpdateFormInputValues;
    onSuccess?: (fields: EntityUpdateFormInputValues) => void;
    onError?: (fields: EntityUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EntityUpdateFormInputValues) => EntityUpdateFormInputValues;
    onValidate?: EntityUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EntityUpdateForm(props: EntityUpdateFormProps): React.ReactElement;
