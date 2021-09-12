const axios = require('axios')

module.exports = async ({ name, branch }) => {
  const renovateUrl = `https://raw.githubusercontent.com/${name}/${branch}/renovate.json`
  console.log(`lookup ${renovateUrl}`)
  try {
    const { data: renovate } = await axios.get(renovateUrl)
    console.log(`${renovateUrl} - success`)
    return renovate
  } catch (error) {
    console.log('no renovate found')
    return false
  }
}
