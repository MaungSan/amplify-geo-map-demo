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
export declare type HikeCreateFormInputValues = {
    name?: string;
    difficulty?: string;
    location?: string;
    lat?: number;
    long?: number;
    length?: number;
    time?: string;
    coverimage?: string;
};
export declare type HikeCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    difficulty?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    lat?: ValidationFunction<number>;
    long?: ValidationFunction<number>;
    length?: ValidationFunction<number>;
    time?: ValidationFunction<string>;
    coverimage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HikeCreateFormOverridesProps = {
    HikeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    difficulty?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    lat?: PrimitiveOverrideProps<TextFieldProps>;
    long?: PrimitiveOverrideProps<TextFieldProps>;
    length?: PrimitiveOverrideProps<TextFieldProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
    coverimage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HikeCreateFormProps = React.PropsWithChildren<{
    overrides?: HikeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HikeCreateFormInputValues) => HikeCreateFormInputValues;
    onSuccess?: (fields: HikeCreateFormInputValues) => void;
    onError?: (fields: HikeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HikeCreateFormInputValues) => HikeCreateFormInputValues;
    onValidate?: HikeCreateFormValidationValues;
} & React.CSSProperties>;
export default function HikeCreateForm(props: HikeCreateFormProps): React.ReactElement;
