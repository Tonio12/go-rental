import mongoose from 'mongoose'

export const dbConnect = async () => {
  try {
    let connectionString = ''

    if (process.env.NODE_ENV === 'development')
      connectionString = process.env.MONGO_URL_LOCAL!
    if (process.env.NODE_ENV === 'production')
      connectionString = process.env.MONGO_URL!

    await mongoose.connect(connectionString) // add await here
    console.log('Connected to Database!')
  } catch (error) {
    console.error(`Error connecting to database: ${error}`)
    throw error
  }
}
