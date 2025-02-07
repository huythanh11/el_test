import {faker} from '@faker-js/faker';


export const testData = {
    validUser: {
        email: 'valid.user@test.com',
        password: 'ValidPassword123!'
    },
    getNewUser: () => ({
        fullName: faker.person.fullName(),
        email: faker.internet.email(),
        password: 'TestPassword123!'
    })
};

