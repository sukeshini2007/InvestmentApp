import React, { useState } from 'react'
import '../styles/UserInput.css'

export const UserInput = (props) => {
  const initialstate = {
    current: 9000,
    yearly_saving: 2000,
    expected_intrest: 2,
    investment_duration: 10,
  }
  const [input, setInput] = useState(initialstate)
  const submitHandler = (event) => {
    event.preventDefault()
    props.onCalculate(input)
  }
  const resetHandler = () => {
    setInput(initialstate)
  }
  const handleChange = (input, value) => {
    setInput((preInput) => {
      return {
        ...preInput,
        [input]: value,
      }
    })
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current">Current Saving</label>
            <input
              value={input['current']}
              type="number"
              id="current"
              onChange={(e) => handleChange('current', e.target.value)}
            ></input>
          </p>
          <p>
            <label htmlFor="yearly_saving">Yearly Saving</label>
            <input
              value={input['yearly_saving']}
              type="number"
              id="yearly_saving"
              onChange={(e) => handleChange('yearly_saving', e.target.value)}
            ></input>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected_intrest">
              Expected Interest(%, per year)
            </label>
            <input
              value={input['expected_intrest']}
              type="number"
              id="expexted_intrest"
              onChange={(e) => handleChange('expected_intrest', e.target.value)}
            ></input>
          </p>
          <p>
            <label htmlFor="investment_duration">Investmemt Duration</label>
            <input
              value={input['investment_duration']}
              type="number"
              id="investment_duration"
              onChange={(e) =>
                handleChange('investment_duration', e.target.value)
              }
            ></input>
          </p>
        </div>
        <div className="btn">
          <button type="reset" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit">Calculate</button>
        </div>
      </form>
    </div>
  )
}
