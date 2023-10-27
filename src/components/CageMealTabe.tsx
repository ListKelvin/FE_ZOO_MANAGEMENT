import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import format from 'date-fns/format'
import { Calendar } from './ui/calendar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Input } from './ui/input'
import { MdDelete } from 'react-icons/md'
import { SelectMap } from './SelectMap'
import { SelectSearch } from './SelectSearch'

type Props = {}

const CageMealTabe = (props: Props) => {
  const [date, setDate] = useState(new Date())
  return (
    <div className='w-full h-full flex flex-col gap-2'>
      <div className='grid'>
        <Popover>
          <PopoverTrigger asChild id={date?.toISOString() || 'date'}>
            <Button
              variant={'outline'}
              className={cn('w-full justify-start text-left font-normal', date && 'text-muted-foreground')}
            >
              <CalendarIcon className='mr-2 h-4 w-4' />
              {date ? format(date, 'PPP') : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-0'>
            <Calendar
              mode='single'
              selected={date}
              onSelect={(value) => {
                setDate(value as Date)
              }}
              disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div
        className='flex-1 flex flex-col p-2 rounded-lg   overflow-auto gap-2
      '
      >
        <div className='flex justify-items-center font-extrabold  gap-2 uppercase text-center text-sm border p-2 rounded-lg shadow-xl'>
          <div className='w-3/12'>Time</div>
          <div className='flex-1'>Food</div>
          <div className='w-2/12'>Delete</div>
        </div>

        <div className='flex justify-items-center font-bold items-center gap-2 uppercase text-center text-sm border p-2 rounded-lg shadow-xl'>
          <div className='w-3/12'>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Theme' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='light'>Light</SelectItem>
                <SelectItem value='dark'>Dark</SelectItem>
                <SelectItem value='system'>System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='flex-1 font-light'>
            <Input placeholder='Foods for feed' />
          </div>
          <div className='w-2/12'>
            <Button className='flex gap-1 justify-center hover:bg-red-500 items-center w-full transition-all hover:scale-110 text-white p-2'>
              <MdDelete className='text-xl ' />
            </Button>
          </div>
        </div>
      </div>
      {/* <SelectSearch query='areas' item='areas' /> */}
    </div>
  )
}

export default CageMealTabe