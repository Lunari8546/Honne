import {
	defineConfig,
	presetIcons, presetUno, presetWebFonts,
	transformerDirectives
} from 'unocss';

export default defineConfig({
  theme: {
    colors: {
      primary: '#F0F0EC',
      secondary: '#4A3626',
      tertiary: '#B8B0A2'
    }
  },
	presets: [
    presetIcons(),
		presetUno(),
		presetWebFonts({
			provider: 'fontshare',
			fonts: {
        sans: 'Zodiak'
			}
		})
	],
	transformers: [
		transformerDirectives()
	]
})
