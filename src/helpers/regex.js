export const urlValidation = str => {
  return str
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()
}
