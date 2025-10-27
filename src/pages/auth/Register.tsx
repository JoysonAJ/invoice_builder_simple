import RegisterForm from '@/form/RegisterForm'
import { homeRoute } from '@/routes/route';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  return (
    <>
      <RegisterForm onRegisterSuccess={
        ()=>{navigate(homeRoute.path)}
      }/>
    </>
  )
}
