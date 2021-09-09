import type { Prisma } from '@prisma/client'
import type { BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const cats = () => {
  return db.cat.findMany()
}

export const cat = ({ id }: Prisma.CatWhereUniqueInput) => {
  return db.cat.findUnique({
    where: { id },
  })
}

interface CreateCatArgs {
  input: Prisma.CatCreateInput
}

export const createCat = ({ input }: CreateCatArgs) => {
  return db.cat.create({
    data: input,
  })
}

interface UpdateCatArgs extends Prisma.CatWhereUniqueInput {
  input: Prisma.CatUpdateInput
}

export const updateCat = ({ id, input }: UpdateCatArgs) => {
  return db.cat.update({
    data: input,
    where: { id },
  })
}

export const deleteCat = ({ id }: Prisma.CatWhereUniqueInput) => {
  return db.cat.delete({
    where: { id },
  })
}
