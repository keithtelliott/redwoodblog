import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CatCreateArgs>({
  cat: {
    one: { breed: 'String', name: 'String' },
    two: { breed: 'String', name: 'String' },
  },
})

export type StandardScenario = typeof standard
