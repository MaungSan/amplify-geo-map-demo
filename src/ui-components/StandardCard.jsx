/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function StandardCard(props) {
  const { hike, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="320px"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      borderRadius="15px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "StandardCard")}
      {...rest}
    >
      <Image
        width="unset"
        height="160px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={hike?.coverimage}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={hike?.name}
            {...getOverrideProps(overrides, "$99 USD")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={hike?.location}
            {...getOverrideProps(overrides, "4bds 3 ba 2,530 sqft - Active")}
          ></Text>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="small"
            isDisabled={false}
            variation="primary"
            as="div"
            children={hike?.difficulty}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
          <Flex
            padding="0px 0px 0px 0px"
            width="198px"
            height="21px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "HikeLength")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="99px"
              height="21px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={`${hike?.time}${" ."}`}
              {...getOverrideProps(overrides, "3 hr 2 min")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="91px"
              height="21px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="107px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={`${hike?.length}${" miles"}`}
              {...getOverrideProps(overrides, "3 min")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
