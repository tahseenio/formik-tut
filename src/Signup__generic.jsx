import React from 'react'
import { useFormik } from 'formik'

export default function Signup() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      checked: []
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='container__input'>
        <input
          id='firstName'
          name='firstName'
          type='text'
          placeholder='First Name'
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </div>
      <div className='container__input'>
        <input
          id='lastName'
          name='lastName'
          type='text'
          placeholder='Last Name'
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </div>
      <div className='container__input'>
        <input
          id='email'
          name='email'
          type='text'
          placeholder='Email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <label>Do you want to be subscribed to the daily newsletter?</label>
      <input
        name='checked'
        type="checkbox"
        onChange={formik.handleChange}
        value='Newsletter'
      />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}
