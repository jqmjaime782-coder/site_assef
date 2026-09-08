import type { GlobalConfig } from 'payload'

export const Faq: GlobalConfig = {
  slug: 'faq',
  label: 'Perguntas Frequentes (FAQ)',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'titulo',
      type: 'text',
      defaultValue: 'Perguntas Frequentes',
    },
    {
      name: 'perguntas',
      type: 'array',
      label: 'Perguntas e Respostas',
      fields: [
        {
          name: 'pergunta',
          type: 'text',
          required: true,
        },
        {
          name: 'resposta',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}