module.exports = config => {
   config.addPassthroughCopy('src/posts')
   config.addPassthroughCopy('src/assets')
   config.addPassthroughCopy('src/scripts')

   return {
      dir: {
         input: 'src',
         output: 'dist',
         includes: 'includes',
         layouts: 'layouts',
      },
   }
}
