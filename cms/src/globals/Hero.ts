import type { GlobalConfig } from 'payload'

export const Hero: GlobalConfig = {
  slug: 'hero',
  label: 'Secção Hero (Página Inicial)',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'modo',
      type: 'select',
      label: 'Tipo de fundo',
      required: true,
      defaultValue: 'carrossel',
      options: [
        { label: 'Carrossel de Fotos', value: 'carrossel' },
        { label: 'Vídeo', value: 'video' },
      ],
    },
    {
      name: 'slidesCarrossel',
      type: 'array',
      label: 'Fotos do Carrossel (cada uma com o seu próprio texto)',
      minRows: 1,
      maxRows: 5,
      admin: {
        description: 'Cada foto pode ter o seu próprio título e frase, tal como no site da Esmabama.',
        condition: (_, siblingData) => siblingData?.modo === 'carrossel',
      },
      fields: [
        {
          name: 'imagem',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'titulo',
          type: 'text',
          required: true,
          admin: { description: 'Ex: "Agricultura", "Saúde", "Educação"' },
        },
        {
          name: 'texto',
          type: 'textarea',
          required: true,
          admin: { description: 'Frase curta de apoio a esta foto' },
        },
      ],
    },
    {
      name: 'video',
      type: 'upload',
      relationTo: 'media',
      label: 'Ficheiro de Vídeo',
      admin: {
        condition: (_, siblingData) => siblingData?.modo === 'video',
      },
    },
    {
      name: 'videoTitulo',
      type: 'text',
      label: 'Título (modo vídeo)',
      defaultValue: 'Esperança que se transforma em futuro',
      admin: {
        condition: (_, siblingData) => siblingData?.modo === 'video',
      },
    },
    {
      name: 'videoTexto',
      type: 'textarea',
      label: 'Texto de apoio (modo vídeo)',
      admin: {
        condition: (_, siblingData) => siblingData?.modo === 'video',
      },
    },
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Texto pequeno (acima do título)',
      defaultValue: 'ASSEF',
    },
    {
      name: 'botaoTexto',
      type: 'text',
      label: 'Texto do botão',
      defaultValue: 'Conhecer o nosso trabalho',
    },
    {
      name: 'botaoLink',
      type: 'text',
      label: 'Link do botão',
      defaultValue: '/sobre',
    },
  ],
}