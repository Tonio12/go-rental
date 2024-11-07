'use client'

import { CardHeader, CardTitle } from '../ui/card'
import CardItem from './CarItem'
import Link from 'next/link'
import { ArrowLeftRight } from 'lucide-react'
import { Button } from '../ui/button'
import { ICar } from '@go-rental/shared'

interface ListHomeCarsProps {
  cars: ICar[]
  loading: boolean
}

const ListHomeCars = ({ cars, loading }: ListHomeCarsProps) => {
  return (
    <>
      <CardHeader className="p-0">
        <CardTitle className="group flex items-center text-2xl p-0">
          Rent Car for Your Next Trip
        </CardTitle>
        <div className="flex">
          <Link href="/search" className="inline-block">
            <Button variant="ghost" className="px-1 ">
              <ArrowLeftRight className="h-4 w-4 me-1" />
              Search cars within location/budget/dates
            </Button>
          </Link>
        </div>
      </CardHeader>
      <div className="text-sm text-muted-foreground">
        {cars?.map((car: any) => <CardItem key={car.id} car={car} />)}
      </div>
    </>
  )
}

export default ListHomeCars
