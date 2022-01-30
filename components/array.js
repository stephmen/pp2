// {
//   'Nacelles Pourpour 2018' [
//     {
//       _createdAt: '2021-09-07T22:37:31Z',
//       _id: '8253a221-936b-4ddc-a46b-fba971b100c2',
//       _rev: 'xZsaDmmUWhmXMRp14lpe2m',
//       _type: 'article',
//       _updatedAt: '2021-09-09T19:15:48Z',
//       mainImage: [Object],
//       projet: [Array],
//       publishedAt: '2018-10-28T19:15:00.000Z',
//       slug: [Object],
//       title: 'PourPour Spectacle'
//     },
//     {
//       _createdAt: '2021-08-26T17:03:54Z',
//       _id: 'cfcca096-f6a0-4e4f-baf1-6fd25d559a92',
//       _rev: 'o6Y72783TH1gwk3QTPoIH3',
//       _type: 'article',
//       _updatedAt: '2021-09-09T19:38:46Z',
//       body: [Array],
//       mainImage: [Object],
//       projet: [Array],
//       publishedAt: '2018-09-30T19:00:00.000Z',
//       slug: [Object],
//       title: 'Communiqué de Presse'
//     }
//   ],
//   'CARNAVAL DES 2 RIVES 2008-09' [
//     {
//       _createdAt: '2021-09-16T13:58:14Z',
//       _id: '95172246-1fb5-47eb-8611-cf60ce94c6a9',
//       _rev: '57COrRrRyNhUfH9yvEvEh0',
//       _type: 'article',
//       _updatedAt: '2021-09-16T14:16:52Z',
//       mainImage: [Object],
//       projet: [Array],
//       publishedAt: '2008-09-16T13:57:00.000Z',
//       slug: [Object],
//       title: 'Bordeaux'
//     }
//   ]
// }







const data = [{
  name: 'James',
  sex: 'male',
}, {
  name: 'Mike',
  sex: 'male',
}, {
  name: 'Janet',
  sex: 'female',
}, {
  name: 'Mary',
  sex: 'female',
}];

const result = data.reduce((c, v) => {
  c[v.sex] = c[v.sex] || [];
  console.log(c)      //Initiate if key does not exist
  c[v.sex].push(v);
                 //Push the value
  return c;
}, {});

console.log(result);