import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PetCreateArgs>({
  pet: {
    one: { species: 'String', name: 'String' },
    two: { species: 'String', name: 'String' },
  },
})

export type StandardScenario = typeof standard
