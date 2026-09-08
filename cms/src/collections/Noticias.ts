import type { CollectionConfig } from 'payload'

export const Noticias: CollectionConfig = {
  slug: 'noticias',
  labels: {
    singular: 'Notícia/Evento',
    plural: 'Notícias e Eventos',
  },
  access: {
    read: () => true,
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
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Usado no endereço da página, ex: "workshop-saude-mental-2026"',
      },
    },
    {
      name: 'tipo',
      type: 'select',
      required: true,
      defaultValue: 'noticia',
      options: [
        { label: 'Notícia', value: 'noticia' },
        { label: 'Evento', value: 'evento' },
      ],
    },
    {
      name: 'data',
      type: 'date',
      required: true,
    },
    {
      name: 'capa',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'resumo',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Resumo curto, usado na lista',
      },
    },
    {
      name: 'conteudo',
      type: 'richText',
    },
  ],
}