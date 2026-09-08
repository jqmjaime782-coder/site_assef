import type { CollectionConfig } from 'payload'

export const Parceiros: CollectionConfig = {
  slug: 'parceiros',
  labels: {
    singular: 'Parceiro',
    plural: 'Parceiros',
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
      name: 'logotipo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'link',
      type: 'text',
      admin: {
        description: 'Opcional — site do parceiro',
      },
    },
    {
      name: 'ordem',
      type: 'number',
      admin: {
        description: 'Ordem de exibição (menor número aparece primeiro)',
      },
    },
  ],
}