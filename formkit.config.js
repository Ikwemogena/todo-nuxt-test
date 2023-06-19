import { fr } from '@formkit/i18n'

import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import genesis from '@formkit/themes/tailwindcss/genesis'

const config = {
  locales: { fr },
  locale: 'fr',
}

// export default config
export default {
    icons: {
      ...genesisIcons,
    },
    config: {
      classes: generateClasses(genesis),
    },
  }