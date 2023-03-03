import React from 'react'

function Form() {
    function formSubmit(e){
        e.preventDefault();
        console.log(e);
    }
  return (
    <div>
        <form onSubmit={formSubmit}>
            <label htmlFor='name' >Name </label>
            <input type="text" id='name'></input>
            <br></br>
            <label>Gender</label>
            <label htmlFor='male'> Male </label>
            <input type="radio" id='male' name="gender" value="Male"></input>
            <label htmlFor='female'> Female </label>
            <input type="radio" id='female' name="gender" value="Female"></input>
            <br></br>
            <label htmlFor='state'>State</label>
            <input type="text" id="state" ></input>
            <br></br>
            <label htmlFor='number'>Phone Number</label>
            <input type="number" id='number'></input>
            <br></br>
            <label htmlFor='address'>Address</label>
            <input type="text" id='address'></input>
            <br></br>
            <input type="submit" placeholder='click'></input>


        </form>
    </div>
  )
}

export default Form