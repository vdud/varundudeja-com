import type { PageServerLoad } from './$types';
import { blogs } from '$lib/db/collection';

export const load = (async () => {
	const allBlogs = await blogs.find({}).toArray();

	return {
		status: 200,
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			allBlogs
		})
	};
}) as PageServerLoad;
