import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function birthdayEntryPlugin() {
  return {
    name: 'birthday-entry',
    generateBundle(_options, bundle) {
      const javascript = Object.keys(bundle).find((file) => file.endsWith('.js') && file.startsWith('assets/'))
      const stylesheet = Object.keys(bundle).find((file) => file.endsWith('.css') && file.startsWith('assets/'))
      if (!javascript) throw new Error('Unable to find the React entry bundle for /29march/')

      this.emitFile({
        type: 'asset',
        fileName: '29march/index.html',
        source: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#20141c" />
    <title>A little something for Anisha</title>
    ${stylesheet ? `<link rel="stylesheet" href="/${stylesheet}" />` : ''}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/${javascript}"></script>
  </body>
</html>`,
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), birthdayEntryPlugin()],
})