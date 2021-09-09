import { cats, cat, createCat, updateCat, deleteCat } from './cats'
import type { StandardScenario } from './cats.scenarios'

describe('cats', () => {
  scenario('returns all cats', async (scenario: StandardScenario) => {
    const result = await cats()

    expect(result.length).toEqual(Object.keys(scenario.cat).length)
  })

  scenario('returns a single cat', async (scenario: StandardScenario) => {
    const result = await cat({ id: scenario.cat.one.id })

    expect(result).toEqual(scenario.cat.one)
  })

  scenario('creates a cat', async () => {
    const result = await createCat({
      input: { breed: 'String', name: 'String' },
    })

    expect(result.breed).toEqual('String')
    expect(result.name).toEqual('String')
  })

  scenario('updates a cat', async (scenario: StandardScenario) => {
    const original = await cat({ id: scenario.cat.one.id })
    const result = await updateCat({
      id: original.id,
      input: { breed: 'String2' },
    })

    expect(result.breed).toEqual('String2')
  })

  scenario('deletes a cat', async (scenario: StandardScenario) => {
    const original = await deleteCat({ id: scenario.cat.one.id })
    const result = await cat({ id: original.id })

    expect(result).toEqual(null)
  })
})
