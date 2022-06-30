import { defineConfig, UserConfigExport, loadEnv } from 'vite'
import * as process from 'process'
import { fileURLToPath, URL } from 'url'
// plugins
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default ({ mode }): UserConfigExport => {
  return defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      viteCompression({
        verbose: true,
        deleteOriginFile: true,
        disable: true
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({ resolvers: [ElementPlusResolver()] })
    ],
    envPrefix: 'VITE_',
    base: mode === 'development' ? './' : '/',
    mode: 'development' || 'production',
    server: {
      port: 3000,
      host: true
      // resolve unlimited refresh
      // hmr: {
      //   host: '127.0.0.1',
      //   protocol: 'ws'
      // }
    },
    build: {
      outDir: 'dist'
    },
    resolve: {
      alias: {
        // '@': resolve(__dirname, '/src')
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: ['.js', '.txs', 'ts']
    },
    define: {
      'process.env': {
        ...loadEnv(mode, process.cwd())
      }
    }
  })
}
