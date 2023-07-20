import React from 'react'
import '../styles/DataTable.css'

export const DataTable = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Saving</th>
            <th>Intrest</th>
            <th>Total Intrest Gain</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((getData) => (
            <tr>
              <td>{getData.year}</td>
              <td>{getData.savingEndOfYear}</td>
              <td>{getData.intrest}</td>
              <td>
                {getData.savingEndOfYear -
                  props.initial -
                  getData.saving * getData.year}
              </td>
              <td>{props.initial + getData.saving * getData.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
