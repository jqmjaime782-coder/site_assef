import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { AreasActuacao } from './collections/AreasActuacao'
import { Equipa } from './collections/Equipa'
import { Publicacoes } from './collections/Publicacoes'
import { Noticias } from './collections/Noticias'
import { Parceiros } from './collections/Parceiros'
import { Configuracoes } from './globals/Configuracoes'
import { SobreNos } from './globals/SobreNos'
import { Impacto } from './globals/Impacto'
import { Hero } from './globals/Hero'
import { ChamadaAccao } from './globals/ChamadaAccao'
import { Faq } from './globals/Faq'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Logo: '/components/Logo#Logo',
        Icon: '/components/Logo#Icon',
      },
    },
    meta: {
      titleSuffix: '- ASSEF',
    },
  },
  collections: [Users, Media, AreasActuacao, Equipa, Publicacoes, Noticias, Parceiros],
  globals: [Configuracoes, SobreNos, Impacto, Hero, ChamadaAccao, Faq],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: {
          disablePayloadAccessControl: true,
          generateFileURL: ({ filename }) => `${process.env.R2_PUBLIC_URL}/${filename}`,
        },
      },
      bucket: process.env.R2_BUCKET || '',
      config: {
        credentials: {
          accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
        },
        region: 'auto',
        endpoint: process.env.R2_ENDPOINT || '',
        forcePathStyle: true,
      },
      clientUploads: true,
    }),
  ],
})