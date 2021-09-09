import { pets, pet, createPet, updatePet, deletePet } from './pets'
import type { StandardScenario } from './pets.scenarios'

describe('pets', () => {
  scenario('returns all pets', async (scenario: StandardScenario) => {
    const result = await pets()

    expect(result.length).toEqual(Object.keys(scenario.pet).length)
  })

  scenario('returns a single pet', async (scenario: StandardScenario) => {
    const result = await pet({ id: scenario.pet.one.id })

    expect(result).toEqual(scenario.pet.one)
  })

  scenario('creates a pet', async () => {
    const result = await createPet({
      input: { species: 'String', name: 'String' },
    })

    expect(result.species).toEqual('String')
    expect(result.name).toEqual('String')
  })

  scenario('updates a pet', async (scenario: StandardScenario) => {
    const original = await pet({ id: scenario.pet.one.id })
    const result = await updatePet({
      id: original.id,
      input: { species: 'String2' },
    })

    expect(result.species).toEqual('String2')
  })

  scenario('deletes a pet', async (scenario: StandardScenario) => {
    const original = await deletePet({ id: scenario.pet.one.id })
    const result = await pet({ id: original.id })

    expect(result).toEqual(null)
  })
})
