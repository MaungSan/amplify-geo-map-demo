/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHike = /* GraphQL */ `
  query GetHike($id: ID!) {
    getHike(id: $id) {
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
export const listHikes = /* GraphQL */ `
  query ListHikes(
    $filter: ModelHikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
