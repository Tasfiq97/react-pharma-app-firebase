import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import useFirebase from '../../Hooks/useFirebase';
import OrderDone from '../OrderDone/OrderDone';
const DeliveryDetails = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const [confirm,setConfirm]=useState(false)
    const history=useHistory();
       
const handleAll=()=>{
     history.push('/order')
}

          
    return (
        <div>
            <h1 className="text-center fw-bold mt-4">Please Give details</h1>
            <Container className="text-center">
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
    
      <input className="w-50 mb-3 p-2" placeholder="name"  {...register("name",{ required: true })} />

<br />
<input className="w-50 mb-3 p-2" placeholder="number"  {...register("phoneNumber", { required: true })} />
<br />
<input className="w-50 mb-3 p-2 rounded" placeholder="address"  {...register("Address", { required: true })} />
<br />


     
      <br />
     <Button  variant="info" type="submit"> Confirm</Button>
     <br />
     { errors.name ?
        <span>text field required</span>
        :
      <Button onClick={()=>handleAll()} variant="warning" className="mt-4">Got to Order page</Button>
     
      }
    </form>
          </Container>
        </div>
    );
};

export default DeliveryDetails;
