// import { error } from '@sveltejs/kit';

// export async function load() {
// 	const planetsData = await fetch('http://127.0.0.1:8081/api/v1/planets/');

// 	if (planetsData) {
// 		const planetsRes = planetsData.json();
// 		return planetsRes;
// 	}

// 	error(404, 'Not found');
// }
export const load = async ({ fetch }) => {
	const planetsRes = await fetch('http://127.0.0.1:8081/api/v1/planets/');
	if (planetsRes) {
		const planetsData = await planetsRes.json();
		const planets = planetsData.data;
		return { planets: planets };
	}
	error(404, 'Not found');
};
