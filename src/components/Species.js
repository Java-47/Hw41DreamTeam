import React from 'react'
import { base_url } from '../utils/constants';
const species = []
function getSpecies() {
  fetch(`${base_url}/v1/species`)
        .then(response => response.json())
        .then(data => data.forEach((item, index)=> {
            species.push(item.name)
        }))
}

getSpecies();

const Species = () => {
  return (
    <select id="space" name="space">
    {species.map((item, index) => <option key={index} value={item}>{item}</option>)}
  </select>
  )
}

export default Species