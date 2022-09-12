export const parseTitle = (text: string) => {
  let out = ''
  const match = text.match(/\*[^]*?\*/g)
  if (match) {
    match.forEach((i: any) => {
      const mark_element = '<strong>' + i.slice(1, -1) + '</strong>'
      text = text.replace(i, mark_element)
      out = text
    })
  } else {
    out = text
  }

  return out
}

export const parseParagraph = (text: string) => {
  let out = ''
  const match = text.match(/\*[^]*?\*/g)
  if (match) {
    match.forEach((i: any) => {
      const mark_element = '<strong>' + i.slice(1, -1) + '</strong>'
      text = text.replace(i, mark_element)
      out = text
    })
  } else {
    out = text
  }

  return out
}
