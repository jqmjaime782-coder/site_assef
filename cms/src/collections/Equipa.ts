import type { CollectionConfig } from 'payload'

export const Equipa: CollectionConfig = {
  slug: 'equipa',
  labels: {
    singular: 'Membro da Equipa',
    plural: 'Equipa',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'nome',
  },
  fields: [
    {
      name: 'nome',
      type: 'text',
      required: true,
    },
    {
      name: 'cargo',
      type: 'text',
      required: true,
    },
    {
      name: 'foto',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'bio',
      type: 'textarea',
    },
    {
      name: 'ordem',
      type: 'number',
      admin: {
        description: 'Ordem de exibição na página (menor número aparece primeiro)',
      },
    },
  ],
}