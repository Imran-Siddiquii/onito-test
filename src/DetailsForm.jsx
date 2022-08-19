import React from 'react'

const DetailsForm = () => {
  return (<>
       <div className="container-fluid m-3">
        <h2 className='h2'>Form</h2>
        <div>
            <label className='' >Personal Details</label><br/>
            <div className="">
  <div class="row align-items-start">

    <div className="col-12">
     <div className="row">
        <div className="col">
            <div className="row">
                <div className="col-5 d-flex">
                <label htmlFor="" className='col-3'>Name *</label> <input type="text" className='col-9' placeholder='Enter Name' />
               </div>
               <div className="col-3  d-flex">
                <label htmlFor="" className='col-4'>Date of Birth or Age</label> <input type="text" className='col-8' placeholder='DD/MM/YYYY or Age in year' />
               </div>
               <div className="col-3  d-flex">
                <label htmlFor="" className='col-3'>Sex</label><select className='col-8' name="Enter Sex" id="" placeholder='Enter Sex'>
                <option value=""></option>
                    
                    <option value="Male">Male</option>

                    <option value="Female">Femal</option>
                </select>
               </div>
               
            </div>
        </div>
     </div>
    </div>
     
    <div className="col-12">
     <div className="row">
        <div className="col">
            <div className="row">
                <div className="col-5 d-flex">
                <label htmlFor="" className='col-3'>Mobile</label> <input type="number" className='col-7' placeholder='Enter Number' />
               </div>
               <div className="col-6  d-flex">
                <label htmlFor="" className='col-2'>Govt Issue ID</label><select className='col-3' name="Enter Sex" id="" placeholder='Enter Sex'>
                <option value=""></option>
                    <option value="Male">Male</option>

                    <option value="Female">Femal</option>
               </select>
                     <input type="text" className='col-6 ms-4' placeholder='Enter Govt ID' />
               </div> 
            </div>
        </div>
     </div>
    </div>
  </div>
</div>
        </div>
            

        <div>
            <label className='' >Contact Details</label><br/>
            <div className="">
  <div class="row align-items-start">

    <div className="col-12">
     <div className="row">
        <div className="col">
            <div className="row">
            <div className="col-6  d-flex">
                <label htmlFor="" className='col-2'>Govt Issue ID</label><select className='col-3' name="Enter Sex" id="" placeholder='Enter Sex'>
                <option value=""></option>
                    <option value="Male">Male</option>

                    <option value="Female">Femal</option>
               </select>
                     <input type="text" className='col-6 ms-4' placeholder='Enter Govt ID' />
               </div>
               <div className="col-3  d-flex">
                <label htmlFor="" className='col-4'>Date of Birth or Age</label> <input type="text" className='col-8' placeholder='DD/MM/YYYY or Age in year' />
               </div>
               <div className="col-3  d-flex">
                <label htmlFor="" className='col-3'>Sex</label><select className='col-8' name="Enter Sex" id="" placeholder='Enter Sex'>
                <option value=""></option>
                    
                    <option value="Male">Male</option>

                    <option value="Female">Femal</option>
                </select>
               </div>
               
            </div>
        </div>
     </div>
    </div>
     
    <div className="col-12">
     <div className="row">
        <div className="col">
            <div className="row">
                <div className="col-5 d-flex">
                <label htmlFor="" className='col-3'>Mobile</label> <input type="number" className='col-7' placeholder='Enter Number' />
               </div>
               <div className="col-6  d-flex">
                <label htmlFor="" className='col-2'>Govt Issue ID</label><select className='col-3' name="Enter Sex" id="" placeholder='Enter Sex'>
                <option value=""></option>
                    <option value="Male">Male</option>

                    <option value="Female">Femal</option>
               </select>
                     <input type="text" className='col-6 ms-4' placeholder='Enter Govt ID' />
               </div> 
            </div>
        </div>
     </div>
    </div>
  </div>
</div>
        </div>
            
            
       </div>
  </>    
  )
}

export default DetailsForm