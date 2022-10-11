import React from "react";
import { useState } from "react";
import { ShowResult } from "./showresult";
import './unitconvform.css'

export const UnitConvForm = (props) => {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  let submit=(e)=>{
    e.preventDefault();
    props.convert(amount,from,to);
  }
  
  let formStyle = {
    minHeight: "100vh",
  };
  return (
    <div className="container mt-3 text-left" style={formStyle}>
      <form onSubmit={submit}>
        <div class="form-group ">
          <label for="amount" >Amount</label>
          <input
            class="form-control form-control-lg"
            type="Number"
            placeholder="Enter Amount"
            id="amount"
            value={amount}
            required
            onChange={(e) => {
              setAmount(e.target.value);
              props.setResult(undefined);
            }}
          ></input>
        </div>


          <div class="formContainer d-lg-flex">
            <div>
              <label htmlFor="from">From</label>
              <select class="form-control w-100" value={from} id="from" required onChange={(e)=>{setFrom(e.target.value);}}>
              <option value="" >-----Select One-----</option>
                <option value="mm">millimeter</option>
                <option value="cm">centimeter</option>
                <option value="in">inches</option>
                <option value="ft">foot</option>
                <option value="m">meter</option>
                <option value="km">kilometer</option>
              </select>
            </div>

            
            <div className="mx-auto px-auto">
              <label htmlFor="to">To</label>
              <select class="form-control" value={to} id="to" required onChange={(e)=>{setTo(e.target.value);}}>
              <option value="" >-----Select One-----</option>
              <option value="mm">millimeter</option>
                <option value="cm">centimeter</option>
                <option value="in">inches</option>
                <option value="ft">foot</option>
                <option value="m">meter</option>
                <option value="km">kilometer</option>
              </select>
            </div>
            <button
              type="submit"
              class="btn btn-primary btn-md mt-3 pl-5 pr-5 text-center ml-auto"
            >
              Convert
            </button>

          </div>
          <br />
            {(props.result!==undefined)?<ShowResult answer={props.result} unit={to}/>:""}
      </form>
    </div>
  );
};
