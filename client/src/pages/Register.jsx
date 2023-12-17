import React from 'react'
import {Button, Form,Input} from 'antd'
import { Link} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
function Register() {

  // for getting values in console this method is used for antd
  const onFinish = async (values) =>{

    try {
      const response = await axios.post('/api/user/register',values);
      if(response.data.success){
        toast.success(response.data.message);
      } else{
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  return (
    <div className='authentication'>
     <div className="authentication-form card p-3">
      <h1 className='card-title'>Nice To Meet You</h1>
      {/* this is form from antd */}
      <Form layout='vertical' onFinish={onFinish}>
          
          <Form.Item label='Name' name='name'>
            <Input placeholder='Name' />
          </Form.Item>
        
          <Form.Item label='Email' name='email'>
            <Input placeholder='Email' />
          </Form.Item>
         
          <Form.Item label='Password' name='password'>
            <Input placeholder='Password' type='password' />
          </Form.Item>
        
         <Button className='primary-button my-2' htmlType='submit'>Register</Button>
       
          <Link className='anchor ' to='/login'>CLICK HERE FOR LOGIN</Link>
      
      </Form>
     </div>
    </div>
  )
}

export default Register