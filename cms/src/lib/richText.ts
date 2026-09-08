export function richTextParaHtml(campo: any): string {
  if (!campo?.root?.children) return ''

  function processarNo(no: any): string {
    if (no.type === 'text') {
      let texto = no.text || ''
      if (no.format & 1) texto = `<strong>${texto}</strong>`
      if (no.format & 2) texto = `<em>${texto}</em>`
      return texto
    }
    const filhos = (no.children || []).map(processarNo).join('')
    switch (no.type) {
      case 'paragraph':
        return `<p>${filhos}</p>`
      case 'heading':
        return `<${no.tag}>${filhos}</${no.tag}>`
      case 'list': {
        const tag = no.listType === 'number' ? 'ol' : 'ul'
        return `<${tag}>${filhos}</${tag}>`
      }
      case 'listitem':
        return `<li>${filhos}</li>`
      default:
        return filhos
    }
  }

  return campo.root.children.map(processarNo).join('')
}