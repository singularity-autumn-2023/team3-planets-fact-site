import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	const result = await fetch(`http://127.0.0.1:8081/api/v1/planets/${params.id}`);
	const planetsData = await result.json();
	console.log('planets data');
	console.log(planetsData);

	if (!planetsData) throw error(404);

	return { planet: planetsData };
};
