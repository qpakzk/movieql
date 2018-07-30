const frodo = {
    name: "Frodo",
    age: 23,
    gender: "male"
};

const resolvers = {
    Query: {
        person: () => frodo
    }
};

export default resolvers;