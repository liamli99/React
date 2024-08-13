import { Form, redirect, useNavigation } from "react-router-dom";
import axios from 'axios';

// Action function, there is no need to include handleSubmit because action function is called after the form's submit event is triggered!
export const newsletterAction = async ({ request }) => {
  // We use FormData API instead of controlled inputs to handle multiple inputs, so that name attribute is necessary!
  const formData = await request.formData();
  // 'data' is an object that has input name as property and input value as value
  const data = Object.fromEntries(formData);
  
  const response = await axios.post('https://www.course-api.com/cocktails-newsletter', data);

  return redirect('/');
}

const Newsletter = () => {
  const navigation = useNavigation();
  // The navigation.state is submitting when the route action is being called
  const isSubmitting = navigation.state === 'submitting';

  return (
    // We must include method property because the default method is 'get' which will not call an action!!!
    <Form className='form' method="post">
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Newsletter</h4>

      <div className='form-row'>
        <label className='form-label' htmlFor='name'>Name</label>
        <input className='form-input' type='text' id='name' name='name' defaultValue='Liam' />
      </div>

      <div className='form-row'>
        <label className='form-label' htmlFor='lastname'>Last Name</label>
        <input className='form-input' type='text' id='lastname' name='lastName' defaultValue='Li' />
      </div>

      <div className='form-row'>
        <label className='form-label' htmlFor='email'>Email</label>
        <input className='form-input' type='text' id='email' name='email' defaultValue='test@test.com' />
      </div>

      <button className='btn btn-block' style={{ marginTop: '0.5rem' }} disabled={isSubmitting}>
        {isSubmitting ? 'Submitting' : 'Submit'}
      </button>
    </Form>
  );
}

export default Newsletter;