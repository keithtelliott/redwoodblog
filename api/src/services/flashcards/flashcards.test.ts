import {
  flashcards,
  flashcard,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard,
} from './flashcards'
import type { StandardScenario } from './flashcards.scenarios'

describe('flashcards', () => {
  scenario('returns all flashcards', async (scenario: StandardScenario) => {
    const result = await flashcards()

    expect(result.length).toEqual(Object.keys(scenario.flashcard).length)
  })

  scenario('returns a single flashcard', async (scenario: StandardScenario) => {
    const result = await flashcard({ id: scenario.flashcard.one.id })

    expect(result).toEqual(scenario.flashcard.one)
  })

  scenario('creates a flashcard', async () => {
    const result = await createFlashcard({
      input: { front: 'String', back: 'String' },
    })

    expect(result.front).toEqual('String')
    expect(result.back).toEqual('String')
  })

  scenario('updates a flashcard', async (scenario: StandardScenario) => {
    const original = await flashcard({ id: scenario.flashcard.one.id })
    const result = await updateFlashcard({
      id: original.id,
      input: { front: 'String2' },
    })

    expect(result.front).toEqual('String2')
  })

  scenario('deletes a flashcard', async (scenario: StandardScenario) => {
    const original = await deleteFlashcard({ id: scenario.flashcard.one.id })
    const result = await flashcard({ id: original.id })

    expect(result).toEqual(null)
  })
})
