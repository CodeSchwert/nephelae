import { faker } from '@faker-js/faker';

const count = 10;
const demigods = [];

for (let i = 0; i < count; i++) {
  const demigod = {
    id: i+1,
    demigod_name: faker.company.companyName(1).split(' - ')[0],
    demigod_description: faker.company.catchPhrase(),
    image_url: '...',
    rarity: 'Common',
    attack: faker.mersenne.rand(1, 1000),
    defence: faker.mersenne.rand(1, 1000),
    health: faker.mersenne.rand(100, 10000),
  };
  demigods.push(demigod);
}

console.log(JSON.stringify(demigods, null, 2));

// need to manually get random images from Unsplash
// use this query to generate a URL to paste into the `image_url` field.
// https://source.unsplash.com/640x640/?blue,yellow,flag
