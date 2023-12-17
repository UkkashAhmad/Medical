import React from 'react'
import {Button, Form,Input} from 'antd'
import {Link} from 'react-router-dom'
function Login() {

  // for getting values in console this method is used for antd
  const onFinish = (values) =>{
    console.log("Recevied values of form", values);
  }

  return (
    <div className='authentication'>
     <div className="authentication-form card p-3">
      <h1 className='card-title'> Welcome Back</h1>
      {/* this is form from antd */}
      <Form layout='vertical' onFinish={onFinish}>
          
          
        
          <Form.Item label='Email' name='email'>
            <Input placeholder='Email' />
          </Form.Item>
         
          <Form.Item label='Password' name='password'>
            <Input placeholder='Password' type='password' />
          </Form.Item>
        
         <Button className='primary-button my-2' htmlType='submit'>Register</Button>
       
          <Link className='anchor ' to='/register '>CLICK HERE FOR REGISTER</Link>
      
      </Form>
     </div>
    </div>
  )
}

export default Login