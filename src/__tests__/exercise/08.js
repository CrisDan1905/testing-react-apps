// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, screen, renderHook} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'
import { act } from 'react-test-renderer';

// 🐨 create a simple function component that uses the useCounter hook
// and then exposes some UI that our test can interact with to test the
// capabilities of this hook
// 💰 here's how to use the hook:
// const {count, increment, decrement} = useCounter()

test('exposes the count and increment/decrement functions', async () => {
  // 🐨 render the component
  const {result} = renderHook(() => useCounter())
  // 🐨 get the elements you need using screen
  // 🐨 assert on the initial state of the hook
  expect(result.current.count).toEqual(0)
  // 🐨 interact with the UI using userEvent and assert on the changes in the UI
  act(() => result.current.increment())
  expect(result.current.count).toEqual(1)

  act(() => result.current.decrement())
  expect(result.current.count).toEqual(0)
})

test('allows customization of the initial count', async () => {
  const {result} = renderHook(() => useCounter({initialCount: 5}))
  expect(result.current.count).toEqual(5)

  act(() => result.current.increment())
  expect(result.current.count).toEqual(6)

  act(() => result.current.decrement())
  expect(result.current.count).toEqual(5)
})

test('allows customization of the step', async () => {
  const {result} = renderHook(() => useCounter({step: 2}))
  expect(result.current.count).toEqual(0)

  act(() => result.current.increment())
  expect(result.current.count).toEqual(2)

  act(() => result.current.decrement())
  expect(result.current.count).toEqual(0)
})

/* eslint no-unused-vars:0 */
