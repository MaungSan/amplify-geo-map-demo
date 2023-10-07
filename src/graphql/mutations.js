/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHike = /* GraphQL */ `
  mutation CreateHike(
    $input: CreateHikeInput!
    $condition: ModelHikeConditionInput
  ) {
    createHike(input: $input, condition: $condition) {
      id
      name
      difficulty
      location
      lat
      long
      length
      time
      coverimage
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateHike = /* GraphQL */ `
  mutation UpdateHike(
    $input: UpdateHikeInput!
    $condition: ModelHikeConditionInput
  ) {
    updateHike(input: $input, condition: $condition) {
      id
      name
      difficulty
      location
      lat
      long
      length
      time
      coverimage
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteHike = /* GraphQL */ `
  mutation DeleteHike(
    $input: DeleteHikeInput!
    $condition: ModelHikeConditionInput
  ) {
    deleteHike(input: $input, condition: $condition) {
      id
      name
      difficulty
      location
      lat
      long
      length
      time
      coverimage
      createdAt
      updatedAt
      __typename
    }
  }
`;
