import * as React from 'react';
import { Header } from './Header';
import { Menu } from './Menu';
import { FnDoc } from './FnDoc';
const exampleData = require('./data.json');

const exampleDataSample = [
  {
    name: 'map',
    description:
      'Map each element of an array using a defined callback function.',
    methods: [
      {
        tag: 'Data First',
        signature: `R.map(array, fn)\nR.map<T, R>(T[], T => R): R[]`,
        example: `R.map([1, 2, 3], x => x * 10) // => [10, 20, 30]`,
        args: [
          { name: 'array', description: 'The array to map.' },
          { name: 'fn', description: 'The function mapper.' },
        ],
        returns: {
          name: 'array',
          description: 'The new mapped array.',
        },
      },
      {
        tag: 'Data Last',
        signature: `R.map(fn)(array)`,
        example: `R.map(x => x * 10)([1, 2, 3]) // => [10, 20, 30]`,
        args: [
          { name: 'fn', description: 'The function mapper.' },
          { name: 'array', description: 'The array to map.' },
        ],
        returns: {
          name: 'array',
          description: 'The new mapped array.',
        },
      },
    ],
  },
];

export function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="container-fluid">
        <div className="row flex-xl-nowrap">
          <Menu
            items={exampleData.map((item: any) => ({
              name: item.name,
              category: item.category,
            }))}
          />
          <div className="col-12 col-md-9 col-xl-8 py-md-3 main-content">
            {exampleData.map((data: any) => (
              <FnDoc {...data} key={data.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
