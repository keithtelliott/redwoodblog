import type { Prisma } from '@prisma/client'
import type { BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const flashcards = () => {
  return db.flashcard.findMany()
}

export const flashcard = ({ id }: Prisma.FlashcardWhereUniqueInput) => {
  return db.flashcard.findUnique({
    where: { id },
  })
}

interface CreateFlashcardArgs {
  input: Prisma.FlashcardCreateInput
}

export const createFlashcard = ({ input }: CreateFlashcardArgs) => {
  return db.flashcard.create({
    data: input,
  })
}

interface UpdateFlashcardArgs extends Prisma.FlashcardWhereUniqueInput {
  input: Prisma.FlashcardUpdateInput
}

export const updateFlashcard = ({ id, input }: UpdateFlashcardArgs) => {
  return db.flashcard.update({
    data: input,
    where: { id },
  })
}

export const deleteFlashcard = ({ id }: Prisma.FlashcardWhereUniqueInput) => {
  return db.flashcard.delete({
    where: { id },
  })
}
