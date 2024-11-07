import { gql } from '@apollo/client'

export const GET_ALL_CARS = gql`
  query GetCars {
    getAllCars {
      name
      id
      transmission
      images {
        url
      }
      category
      rentPerDay
      ratings {
        count
        value
      }
      fuelType
    }
  }
`
