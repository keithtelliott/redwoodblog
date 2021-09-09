import type { Prisma } from '@prisma/client'
import type { BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const pets = () => {
  return db.pet.findMany()
}

export const pet = ({ id }: Prisma.PetWhereUniqueInput) => {
  return db.pet.findUnique({
    where: { id },
  })
}

interface CreatePetArgs {
  input: Prisma.PetCreateInput
}

export const createPet = ({ input }: CreatePetArgs) => {
  return db.pet.create({
    data: input,
  })
}

interface UpdatePetArgs extends Prisma.PetWhereUniqueInput {
  input: Prisma.PetUpdateInput
}

export const updatePet = ({ id, input }: UpdatePetArgs) => {
  return db.pet.update({
    data: input,
    where: { id },
  })
}

export const deletePet = ({ id }: Prisma.PetWhereUniqueInput) => {
  return db.pet.delete({
    where: { id },
  })
}
