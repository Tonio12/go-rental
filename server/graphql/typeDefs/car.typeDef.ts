import { gql } from 'graphql-tag'

export const carTypeDefs = gql`
  type CarImages {
    url: String!
    public_Id: String!
  }

  type CarRatings {
    value: Float
    count: Int
  }

  type Car {
    id: ID!
    name: String!
    description: String!
    rentPerDay: Float!
    status: String!
    year: Int!
    address: String!
    power: Int!
    milleage: Int!
    brand: String!
    images: [CarImages]
    transmission: String!
    fuelType: String!
    seats: Int!
    doors: Int!
    category: String!
    ratings: CarRatings
    updatedAt: String
    createdAt: String
  }

  input CarInput {
    name: String!
    description: String!
    status: String
    rentPerDay: Float!
    address: String!
    images: [String]
    brand: String!
    year: Int!
    transmission: String!
    milleage: Int!
    power: Int!
    seats: Int!
    doors: Int!
    fuelType: String!
    category: String!
  }

  type Query {
    getAllCars: [Car]
    getCarById(carId: ID!): Car
  }

  type Mutation {
    createCar(carInput: CarInput!): Car
    updateCar(carId: ID!, carInput: CarInput!): Boolean
    deleteCar(carId: ID!): Boolean
  }
`
