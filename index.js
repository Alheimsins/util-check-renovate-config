(async () => {
  const open = require('open')
  const clipboardy = require('clipboardy')
  const { writeFile } = require('fs').promises
  const repos = require('./data/repos.json')
  const template = require('./data/template.json')
  const getRenovate = require('./lib/get-renovate-json')
  console.log(`got ${repos.length} repos`)
  const next = async () => {
    if (repos.length > 0) {
      const repo = repos.pop()
      console.log(`now checking ${repo.name}`)
      try {
        const renovate = await getRenovate({
          name: repo.full_name,
          branch: repo.default_branch
        })
        if (renovate) {
          if (JSON.stringify(renovate, null, 2) === JSON.stringify(template, null, 2)) {
            console.log(`${repo.name} - renovate ok`)
            await next()
          } else {
            console.log(`${repo.name} - renovate needs update`)
            await clipboardy.write(JSON.stringify(template, null, 2))
            await writeFile('data/repos.json', JSON.stringify(repos, null, 2), 'utf-8')
            open(`${repo.html_url}/blob/${repo.default_branch}/renovate.json`)
            process.exit()
          }
        } else {
          console.log(`${repo.name} - no renovate`)
          await next()
        }
      } catch (error) {
        console.log(`Could not check ${repo.name} - error`)
      }
    } else {
      console.log('Finished!')
      await writeFile('data/repos.json', JSON.stringify(repos, null, 2), 'utf-8')
    }
  }
  await next()
})()
