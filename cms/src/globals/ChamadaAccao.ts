import type { GlobalConfig } from 'payload'

export const ChamadaAccao: GlobalConfig = {
  slug: 'chamada-accao',
  label: 'Faixa "Apoie-nos" (CTA)',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'titulo',
      type: 'text',
      required: true,
      defaultValue: 'Junte-se a nós nesta causa',
    },
    {
      name: 'texto',
      type: 'textarea',
      required: true,
      defaultValue:
        'O teu apoio ajuda-nos a continuar a transformar vidas na Beira e em Sofala. Fala connosco sobre como podes contribuir.',
    },
    {
      name: 'botaoTexto',
      type: 'text',
      required: true,
      defaultValue: 'Fale Connosco',
    },
    {
      name: 'botaoLink',
      type: 'text',
      required: true,
      defaultValue: '/contactos',
    },
  ],
}