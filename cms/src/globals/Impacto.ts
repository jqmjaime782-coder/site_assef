import type { GlobalConfig } from 'payload'

export const Impacto: GlobalConfig = {
  slug: 'impacto',
  label: 'Impacto',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Texto pequeno (acima do título)',
      defaultValue: 'O Nosso Impacto',
    },
    {
      name: 'titulo',
      type: 'text',
      label: 'Título da secção',
      defaultValue: 'Resultados que transformam vidas',
    },
    {
      name: 'estatisticas',
      type: 'array',
      label: 'Estatísticas de Impacto',
      admin: {
        description: 'Números de destaque, ex: "1.200+" com descrição "meninas empoderadas em saúde sexual e reprodutiva"',
      },
      fields: [
        {
          name: 'icone',
          type: 'select',
          required: true,
          defaultValue: 'pessoas',
          options: [
            { label: 'Pessoas', value: 'pessoas' },
            { label: 'Saúde', value: 'saude' },
            { label: 'Agricultura', value: 'agricultura' },
            { label: 'Protecção / Espaço Seguro', value: 'protecao' },
            { label: 'Educação', value: 'educacao' },
            { label: 'Comunidade / Localização', value: 'comunidade' },
            { label: 'Deficiência / PCD', value: 'deficiencia' },
            { label: 'Género', value: 'genero' },
            { label: 'Formação Profissional', value: 'formacao' },
          ],
        },
        {
          name: 'numero',
          type: 'text',
          required: true,
          admin: {
            description: 'Ex: "1.200+", "15", "3 Províncias"',
          },
        },
        {
          name: 'descricao',
          type: 'text',
          required: true,
          admin: {
            description: 'Ex: "meninas empoderadas em saúde sexual e reprodutiva"',
          },
        },
      ],
    },
  ],
}