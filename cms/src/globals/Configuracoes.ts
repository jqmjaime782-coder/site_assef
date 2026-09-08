import type { GlobalConfig } from 'payload'

export const Configuracoes: GlobalConfig = {
  slug: 'configuracoes',
  label: 'Configurações do Site',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'nomeOrganizacao',
      type: 'text',
      required: true,
      defaultValue: 'ASSEF',
    },
    {
      name: 'slogan',
      type: 'text',
    },
    {
      name: 'logotipo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'endereco',
      type: 'text',
    },
    {
      name: 'telefone',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'redesSociais',
      type: 'array',
      fields: [
        {
          name: 'plataforma',
          type: 'select',
          required: true,
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'YouTube', value: 'youtube' },
            { label: 'X (Twitter)', value: 'x' },
            { label: 'WhatsApp', value: 'whatsapp' },
            { label: 'TikTok', value: 'tiktok' },
          ],
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'paginasActivas',
      type: 'group',
      label: 'Secções Activas do Site',
      admin: {
        description: 'Liga/desliga secções inteiras do site sem apagar o conteúdo já criado',
      },
      fields: [
        {
          name: 'mostrarEquipa',
          type: 'checkbox',
          label: 'Mostrar página de Equipa/Direcção',
          defaultValue: false,
        },
        {
          name: 'mostrarImpacto',
          type: 'checkbox',
          label: 'Mostrar secção de Impacto',
          defaultValue: true,
        },
        {
          name: 'mostrarPublicacoes',
          type: 'checkbox',
          label: 'Mostrar página de Publicações',
          defaultValue: true,
        },
      ],
    },
  ],
}