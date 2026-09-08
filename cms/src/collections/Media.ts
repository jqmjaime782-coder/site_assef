import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: {
        description: 'Descrição da imagem, importante para acessibilidade (ex: "Mulheres em formação de costura, Beira")',
      },
    },
  ],
  upload: {
    focalPoint: true,
    formatOptions: {
      format: 'webp',
      options: { quality: 80 },
    },
  },
}