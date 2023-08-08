import { sendEmail } from '$lib/bigFunctions/sendEmail';
import { json, type RequestHandler } from '@sveltejs/kit';

import { contact } from '$lib/db/collection';

export const POST: RequestHandler = async ({ request }) => {
	const { name, email, phoneNumber, $contactMessage } = await request.json();

	const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

	await sendEmail(
		'varundudeja95@gmail.com',
		'You have a new message from your website!',
		`Name: ${formattedName} \nEmail: ${email} \nPhone Number: +91 ${phoneNumber} \nMessage: ${$contactMessage}`
	);

	await sendEmail(
		email,
		'Regarding your message to Varun Dudeja (varundudeja.com)',
		`Hey ${formattedName} \n\nThankyou for your Interest in my services, \nI will get back to you as soon as possible. \n\nplease dont reply to this message, this is an automated message. \n\nGreetings, \nVarun Dudeja `
	);

	await contact.insertOne({
		name,
		email,
		phoneNumber,
		message: $contactMessage,
		createdAt: new Date()
	});

	return json({ success: true });
};
