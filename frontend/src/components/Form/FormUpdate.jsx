import React from 'react'
import axios from 'axios'
const FormUpdate = ({ taskId }) => {

  function updateData() {
    axios.get(`http://localhost:3001/tasks/${taskId}`).
      then((res) => {
        console.log(res);
      }).
      catch((error) => {
        console.log(error);
      })
  }
  return (
    <>
      <div>FormUpdate</div>
    </>

  )
}

export default FormUpdate