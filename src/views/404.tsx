import { defineComponent, ref } from 'vue'
import { ElImage, ElIcon, ElButton } from 'element-plus'
import { Picture as ElPicture } from '@element-plus/icons-vue'
import logo from '@/assets/logo.png'
import styles from '@/assets/css/404.module.css'

export default defineComponent({
  setup() {
    const count = ref(0)
    return () => (
      <div
        style={{
          fontFamily: 'Avenir, Helvetica, Arial, sans-serif',
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          textAlign: 'center',
          color: '#2c3e50',
          marginTop: '60px'
        }}
      >
        <h1>Vue 3 + TypeScript + Vite With VueJSX Plugin</h1>
        <ElImage
          src={logo}
          fit="fill"
          v-slots={{
            error: () => (
              <ElIcon>
                <ElPicture></ElPicture>
              </ElIcon>
            )
          }}
        ></ElImage>
        <p>
          Recommended IDE setup:
          <a href="https://code.visualstudio.com/" target="_blank" class={styles.green}>
            VS Code
          </a>
          +
          <a href="https://github.com/johnsoncodehk/volar" target="_blank" class={styles.green}>
            Volar
          </a>
        </p>

        <p>
          See
          <code class={styles.code}>README.md</code>
          for more information.
        </p>

        <p>
          <a href="https://vitejs.dev/guide/features.html" target="_blank" class={styles.green}>
            Vite Docs
          </a>
          |
          <a href="https://v3.vuejs.org/" target="_blank" class={styles.green}>
            Vue 3 Docs
          </a>
        </p>

        <ElButton onClick={() => count.value++} size="small" color="#42b983">
          count is: {count.value}
        </ElButton>
        <p>
          Edit
          <code class={styles.code}>views/404.tsx</code> to test hot module replacement.
        </p>
      </div>
    )
  }
})
