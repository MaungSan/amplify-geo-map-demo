/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Hike } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StandardCardOverridesProps = {
    StandardCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    "$99 USD"?: PrimitiveOverrideProps<TextProps>;
    "4bds 3 ba 2,530 sqft - Active"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    HikeLength?: PrimitiveOverrideProps<FlexProps>;
    "3 hr 2 min"?: PrimitiveOverrideProps<TextProps>;
    "3 min"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StandardCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    hike?: Hike;
} & {
    overrides?: StandardCardOverridesProps | undefined | null;
}>;
export default function StandardCard(props: StandardCardProps): React.ReactElement;
