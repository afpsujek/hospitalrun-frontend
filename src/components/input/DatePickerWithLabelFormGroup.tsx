import React from 'react'
import { Label, DateTimePicker } from '@hospitalrun/components'

interface Props {
  name: string
  label: string
  value: Date | undefined
  isEditable: boolean
  onChange?: (date: Date) => void
}

const DatePickerWithLabelFormGroup = (props: Props) => {
  const { onChange, label, name, isEditable, value } = props
  const id = `${name}DatePicker`
  return (
    <div className="form-group">
      <Label text={label} htmlFor={id} />
      <DateTimePicker
        dateFormat="MM/dd/yyyy"
        dateFormatCalendar="LLLL yyyy"
        dropdownMode="scroll"
        selected={value}
        timeIntervals={30}
        withPortal={false}
        disabled={!isEditable}
        onChange={(inputDate) => {
          if (onChange) {
            onChange(inputDate)
          }
        }}
      />
    </div>
  )
}

export default DatePickerWithLabelFormGroup
