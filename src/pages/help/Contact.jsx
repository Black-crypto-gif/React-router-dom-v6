import { Form, redirect, useActionData } from 'react-router-dom'

export default function Contact() {
	const data = useActionData();
  return (
    <div>
		<h1>Contact Us</h1>
		<p>Do you have questions or feedback for us? We'd love to hear from you!</p>
		<Form method='post' action='/help/contact'>
			<label for="name">Name:</label>
			<input type="text" id="name" name="name" required/>
			<label for="email">Email:</label>
			<input type="email" id="email" name="email" required />
			<label for="message">Message:</label>
			<textarea id="message" name="message" required></textarea>
			<button type="submit">Send</button>
			{data && data.error && <p>{data.error}</p>}
		</Form>
    </div>
  )
}


export const contactAction = async ({ request }) =>{
	const data = await request.formData();
	const submit = {
		email: data.get('email'),
		message : data.get('message'),
		name : data.get('name')
	}
	console.log(submit);
	// send post req:
	if(submit.message.length < 10){
		return {
			error: 'message need to be 10 char longer'
		}
	}
	//redirect :
	return redirect('/');
}