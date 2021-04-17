function splitNested(str: string) {
  return [str].join('.').replace(/\[/g, '.').replace(/\]/g, '').split('.')
}

function getCell(target: object, field: string) {
  const directGet = target[field]
  if (directGet !== undefined && directGet !== null) {
    return directGet
  }

  const pathArray = splitNested(field)
  let result
  try {
    result = pathArray.reduce((curr, path) => curr[path], target)
  } catch (e) {}
  return result
}

export default getCell
