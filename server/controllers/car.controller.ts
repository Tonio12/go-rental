import mongoose from 'mongoose'
import Car from '../models/car.model'
import { GraphQLError } from 'graphql'
import { CarInput } from '../types/car.types'

export const getAllCars = async () => {
  const cars = await Car.find()
  return cars
}

export const getCarById = async (carId: string) => {
  const car = await Car.findById(carId)

  if (!mongoose.Types.ObjectId.isValid(carId)) {
    throw new GraphQLError('Invalid car ID format')
  }

  if (!car) {
    throw new GraphQLError('No car found')
  }

  return car
}

export const createCar = async (carInput: CarInput) => {
  const newCar = await Car.create(carInput)
  return newCar
}

export const updateCar = async (carId: string, carInput: CarInput) => {
  const car = await Car.findById(carId)

  if (!mongoose.Types.ObjectId.isValid(carId)) {
    throw new GraphQLError('Invalid car ID format')
  }

  if (!car) {
    throw new GraphQLError('No car found')
  }

  await car.set(carInput).save()

  return true
}

export const deleteCar = async (carId: string) => {
  const car = await Car.findById(carId)

  if (!mongoose.Types.ObjectId.isValid(carId)) {
    throw new GraphQLError('Invalid car ID format')
  }

  if (!car) {
    throw new GraphQLError('No car found')
  }

  await car.deleteOne()

  return true
}
