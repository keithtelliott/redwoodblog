import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.FlashcardCreateArgs>({
  flashcard: {
    one: { front: 'String', back: 'String' },
    two: { front: 'String', back: 'String' },
  },
})

export type StandardScenario = typeof standard
