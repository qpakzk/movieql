export const people = [
	{
		id: 0,
		name: 'Frodo',
		age: 23,
		gender: 'male',
	},
	{
		id: 1,
		name: 'Olivia',
		age: 20,
		gender: 'female',
	},
	{
		id: 2,
		name: 'Sophia',
		age: 22,
		gender: 'female',
	},
	{
		id: 3,
		name: 'Amelia',
		age: 19,
		gender: 'female',
	},
	{
		id: 4,
		name: 'Muhammad',
		age: 24,
		gender: 'male',
	},
	{
		id: 5,
		name: 'Oliver',
		age: 21,
		gender: 'male',
	},
	{
		id: 6,
        name: 'Noah',
        age: 25,
        gender: 'male',
	}
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
}