module.exports = config => {
   config.addNunjucksFilter('getAge', date => {
      const diff = Date.now() - date.getTime()
      const age = new Date(diff)
      return Math.abs(age.getUTCFullYear() - 1970)
   })

   config.addPassthroughCopy('src/assets')
   config.addPassthroughCopy('src/scripts')
   config.addWatchTarget('src/**/*.{css, html, js}')

   return {
      dir: {
         input: 'src',
         output: 'dist',
         includes: 'includes',
         layouts: 'layouts',
         data: 'data',
      },
   }
}
