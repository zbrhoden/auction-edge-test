const formatDate = (
  date,
  customOptions,
) => {
  const options = {
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    year: '2-digit',
    ...customOptions,
  }
  return new Date(date).toLocaleString('en-US', options)
}

export default formatDate