import {react, useState} from 'react';


function Form() {
    const[email, setEmail]=useState('');
    const[errors, setErrors]=useState({})

    function emailHandler(event) {
        return setEmail(event.target.value);
    }

    function MouseOver(event) {
        event.target.style.background = '#5A668A';
               
      }
      function MouseOut(event){
        event.target.style.background="#2c344b";
      }
    
  
    function handleSubmit(event) {
        event.preventDefault();

        const validationErrors={}
        if (!email.trim()) {
            validationErrors.email='Email is required'
        }else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email='Oops! Please check your email'
        }
        setErrors(validationErrors);
    }
    return  <div >
      
            <form onSubmit={handleSubmit} noValidate className='form-div'>
           <div>
            <input type="email"
            placeholder='Email address' 
            name='email'
            value={email}
            
            onChange={emailHandler}
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            style={{ border: errors.email? ' solid #FB3E3E' : 'none'}}
          
            /> 
            </div>
            <div>
                <button type='submit' className='req' style={{ outline: errors.email && 'none'}}>Request Access</button>
            </div>
            <div>
                {errors.email && <span style={{color:'#FB3E3E'}}>{errors.email}</span>}
            </div>
            </form> 
        </div>
}

export default Form;