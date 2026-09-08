import type { CollectionConfig } from 'payload'

export const AreasActuacao: CollectionConfig = {
  slug: 'areas-actuacao',
  labels: {
    singular: 'Área de Actuação',
    plural: 'Áreas de Actuação',
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
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Usado no endereço da página, ex: "educacao-inclusiva"',
      },
    },
    {
      name: 'icone',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'descricaoCurta',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Resumo curto, usado na grelha de destaque',
      },
    },
    {
      name: 'descricaoCompleta',
      type: 'richText',
      admin: {
        description: 'Texto completo, usado na página individual da área',
      },
    },
  ],
}