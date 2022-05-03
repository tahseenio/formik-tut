import React from 'react'
import { useFormik } from 'formik'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

export default function Signup() {


  const formik = useFormik({
    initialValues: {
      firstName: '',
      LastName: '',
      email: '',
      checked: [],
    },
    onSubmit: (values) => {
      formik.setSubmitting(true)
      console.log(values)
      formik.setSubmitting(false)
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        name='firstName'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="outlined-basic"
        label="First Name"
        variant="outlined"
      />
      <div>
        <Checkbox
          name='checked'
          value='isTall'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div>
        <Button
          disabled={formik.isSubmitting}
          type='submit'
          variant="contained"
        >Submit</Button>
      </div>
      <pre>{JSON.stringify(formik.values, null, 2)}</pre>
    </form>
  )
}
