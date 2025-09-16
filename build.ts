import dts from 'bun-plugin-dts'

await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  target: 'node',
  external: ['*'],
  plugins: [
    dts()
  ]
})

await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist/bun',
  target: 'bun'
})
