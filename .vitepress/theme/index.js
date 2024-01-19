import DefaultTheme from 'vitepress/theme'
import './global.css'


export default {
    extends: DefaultTheme

  }
  // interface LocaleSpecificConfig<ThemeConfig = any> {
  //   lang?: string
  //   dir?: string
  //   title?: string
  //   titleTemplate?: string | boolean
  //   description?: string
  //   head?: HeadConfig[] // will be merged with existing head entries, duplicate meta tags are automatically removed
  //   themeConfig?: ThemeConfig // will be shallow merged, common stuff can be put in top-level themeConfig entry
  // },