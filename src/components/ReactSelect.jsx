import Select from 'react-select'
import {
  selectPriceFilter,
  selectLevelFilter,
  setPriceFilter,
  setLevelFilter,
} from '../redux/slices/filterSlice'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReactSelect = ({ price }) => {
  const [priceValue, setPriceValue] = useState(useSelector(selectPriceFilter))
  const [levelValue, setLevelValue] = useState(useSelector(selectLevelFilter))

  const dispatch = useDispatch()

  const priceOptions = [
    { value: 'Any Price', label: 'Any Price' },
    {
      value: 'up to $15',
      label: 'up to $15',
    },
    { value: '$15-$30', label: '$15-$30' },
    { value: '$30+', label: '$30+' },
  ]

  const levelOptions = [
    { value: 'Any Level', label: 'Any Level' },
    {
      value: 'Beginner',
      label: 'Beginner',
    },
    { value: 'Middle', label: 'Middle' },
    { value: 'Pro', label: 'Pro' },
  ]

  const getPriceValue = () => {
    return priceValue ? priceOptions.find((i) => i.value === priceValue) : ''
  }

  const getLevelValue = () => {
    return levelValue ? levelOptions.find((i) => i.value === levelValue) : ''
  }

  const changePriceValue = (newValue) => {
    dispatch(setPriceFilter(newValue.value))
    setPriceValue(newValue.value)
  }

  const changeLevelValue = (newValue) => {
    dispatch(setLevelFilter(newValue.value))
    setLevelValue(newValue.value)
  }
  return price === 'price' ? (
    <Select
      classNamePrefix="custom-select"
      onChange={changePriceValue}
      value={getPriceValue()}
      options={priceOptions}
    />
  ) : (
    <Select
      classNamePrefix="custom-select"
      onChange={changeLevelValue}
      value={getLevelValue()}
      options={levelOptions}
    />
  )
}

export default ReactSelect
