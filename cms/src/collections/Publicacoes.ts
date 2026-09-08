import type { CollectionConfig } from 'payload'

export const Publicacoes: CollectionConfig = {
  slug: 'publicacoes',
  labels: {
    singular: 'Publicação',
    plural: 'Publicações',
  },
  admin: {
    useAsTitle: 'titulo',
  },
  fields: [
    {
      name: 'titulo',
      type: 'text',
      required: true,
    },
    {
      name: 'descricao',
      type: 'textarea',
    },
    {
      name: 'data',
      type: 'date',
      required: true,
    },
    {
      name: 'ficheiro',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'PDF do relatório/publicação',
      },
    },
  ],
}