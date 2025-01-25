import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const filterData = [
  {
    filterType: 'Location',
    array: ['Delhi', 'Bangalore', 'Hyderabad', 'Pune', 'Gurugram'],
  },
  {
    filterType: 'Industry',
    array: ['Frontend developer', 'Backend developer', 'Fullstack developer'],
  },
  {
    filterType: 'Salary',
    array: ['0-40k', '42k-1lakh', '1lakh to 5lakh'],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const dispatch = useDispatch()
  const changeHandler = (value) => {
    setSelectedValue(value);
  }
  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue))
  }, [selectedValue])

  return (
    <div className="p-4 rounded-md shadow-md w-1/4">
      <p className="text-xl font-bold">Filter Jobs</p>
      <hr className="mt-3 mb-4" />

      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data, index) => (
          <div key={index} className="space-y-3">

            <h1 className="text-lg font-semibold">{data.filterType}</h1>
            {
              data.array.map((item, idx) => {
                const itemId = `id${index}-${idx}`
                return (
                  <div className='flex items-center space-x-2 my-2'>
                    <RadioGroupItem value={item} id={itemId} />
                    <Label htmlFor={itemId}>{item}</Label>
                  </div>
                )
              })
            }
          </div>
        ))
        }
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
