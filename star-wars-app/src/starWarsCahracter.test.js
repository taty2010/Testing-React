import React from 'react'
import setupTests from './setupTests';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom";
import App from './App'

// test("wait for promise to resolve", (done) => {
//     setupTests(2).then(res => {
//         expect(res).toBe('hurray')
//         done();
//     })
// });

// test("wait for promise to resolve", () => {
//     return setupTests(3).then(res => expect(res).toBe('hurray'))
// })

test("render of Star Wars logo", async () => {
    const wrapper = rtl.render(<App/>);

    const image = wrapper.getAllByAltText(/logo/i)
    expect(image[0]).toBeVisible();
})