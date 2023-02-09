import { defineConfig, loadEnv, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import { viteVConsole } from 'vite-plugin-vconsole';
import { viteMockServe } from 'vite-plugin-mock';
import { visualizer } from 'rollup-plugin-visualizer';

const pathResolve = (dir: string) => resolve(__dirname, dir);

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv) => {
	// 获取环境变量
	const env: Partial<ImportMetaEnv> = loadEnv(mode, process.cwd());
	return defineConfig({
		define: {
			'process.env': env,
		},
		resolve: {
			// 这里的alias是路径别名，是运行阶段的替换路径，而tsconfig.json中的paths是编码阶段的提示，
			alias: {
				'@': pathResolve('src'), // path.resolve中，'./src' 等于 'src'
				// '@router': pathResolve('src/router'),
				'/@img': 'src/assets/images/', // path.resolve中，'./src' 等于 'src'
			},
		},
		plugins: [
			vue(),
			// 默认会向 index.html 注入 .env 文件的内容，类似 vite 的 loadEnv函数
			// 还可配置entry入口文件， inject自定义注入数据等
			createHtmlPlugin(),
			// 自动导入src/compoents下的组件和配置的ui（vant）库组件,关闭ui组件样式的自动按需导入
			// 在首页main.ts通过import 'vant/lib/index.css'全局导入; 必须在导入 theme.less 之前
			Components({
				resolvers: [VantResolver({ importStyle: false })],
			}),
			AutoImport({
				imports: ['vue', 'vue-router'],
				// 设置为在'src/types/'目录下生成解决ts报错，默认是当前目录('./'，即根目录)
				dts: 'src/types/auto-import.d.ts',
				// 自动生成'eslintrc-auto-import.json'文件，在'.eslintrc.cjs'的'extends'中引入解决报错
				// 'vue-global-api'这个插件仅仅解决vue3 hook报错
				eslintrc: {
					enabled: true,
				},
			}),
			viteVConsole({
				entry: pathResolve('src/main.ts'),
				localEnabled: true,
				enabled: env.VITE_BUILD_VCONSOLE === 'true',
				config: {
					// log: {
					maxLogNumber: 1000,
					// },
					theme: 'dark',
				},
			}),
			viteMockServe({
				// default
				mockPath: 'src/mock',
				localEnabled: command === 'serve', //开发环境默认开启mock功能
				prodEnabled: command !== 'serve' && mode === 'test', // 配置测试环境使用mock。步骤-1：.env.development中使用 VITE_APP_API_BASE_URL = /api-dev；2：打包采用yarn build:test
				injectCode: `
				  import { setupProdMockServer } from './mockProdServer';
				  setupProdMockServer();
				`,
				supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
				watchFiles: true, // 监视文件更改
			}),
			// 打包分析
			visualizer({
				open: true, //注意这里要设置为true，否则无效
				gzipSize: true,
				brotliSize: true,
			}),
		],
		base: '/eshimin-shrs/',
		server: {
			port: 3000, // 默认 // vite3已改为默认5173
			host: true, // 支持从ip启动
			open: false, // 自动打开浏览器
			proxy: {
				'/api-dev': {
					target: 'https://j1devzzjb.rsj.sh.cegn.cn/ldlzy-zzjb-shrs/', // 后台服务地址
					changeOrigin: true, // 是否允许不同源
					secure: false, // 支持https
					rewrite: (path) => path.replace(/^\/api-dev/, ''),
				},
			},
			hmr: true,
		},
		build: {
			outDir: 'dist', // 指定打包路径，默认为项目根目录下的 dist 目录
			emptyOutDir: true,
			sourcemap: env.VITE_BUILD_SOURCEMAP === 'true',
			// minify默认esbuild，esbuild模式下terserOptions将失效
			// vite3变化：Terser 现在是一个可选依赖，如果你使用的是 build.minify: 'terser'，你需要手动安装它 `npm add -D terser`
			minify: 'terser',
			terserOptions: {
				compress: {
					keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
					drop_console: env.VITE_BUILD_DROP_CONSOLE === 'true', // 去除 console
					drop_debugger: true, // 去除 debugger
				},
			},
			rollupOptions: {
				input: {
					index: resolve(__dirname, 'index.html'),
				},
				output: {
					chunkFileNames: 'static/js/[name]-[hash].js',
					entryFileNames: 'static/js/[name].js',
					assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
				},
			},
			chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
		},
		css: {
			preprocessorOptions: {
				less: {
					javascriptEnabled: true,
					additionalData: `@import "${resolve(__dirname, 'src/styles/index.less')}";`,
				},
			},
		},
	});
};
