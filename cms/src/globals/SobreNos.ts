import type { GlobalConfig } from 'payload'

export const SobreNos: GlobalConfig = {
  slug: 'sobre-nos',
  label: 'Sobre Nós',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'capa',
      type: 'upload',
      relationTo: 'media',
      label: 'Foto de Capa (topo da página)',
    },
    {
      name: 'quemSomos',
      type: 'richText',
      label: 'Quem Somos',
    },
    {
      name: 'missao',
      type: 'richText',
      label: 'Missão',
    },
    {
      name: 'visao',
      type: 'richText',
      label: 'Visão',
    },
    {
      name: 'valores',
      type: 'richText',
      label: 'Valores',
    },
    {
      name: 'historia',
      type: 'array',
      label: 'Linha do Tempo — História',
      admin: {
        description: 'Marcos importantes da organização, em ordem cronológica (ex: fundação, registo oficial, planos estratégicos)',
      },
      fields: [
        {
          name: 'ano',
          type: 'text',
          required: true,
          admin: { description: 'Ex: "2007", "Março 2015"' },
        },
        {
          name: 'titulo',
          type: 'text',
          required: true,
          admin: { description: 'Ex: "Fundação", "Registo oficial"' },
        },
        {
          name: 'descricao',
          type: 'textarea',
        },
        {
          name: 'foto',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}