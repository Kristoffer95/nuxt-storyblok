// const colors = require('tailwindcss/colors')

const COLOR_STYLES = {
  /**
   * NOTE: will be used like:
   * background-color: bg-skin-base, bg-skin-muted
   * color: text-skin-base, text-skin-muted
   */
  // skin: {
    cream:      withOpacity('--color-cream'),
    tan:        withOpacity('--color-tan'),
    brown:      withOpacity('--color-brown'),
    grey:       withOpacity('--color-grey'),
    black:      withOpacity('--color-black'),
    pistachio:  withOpacity('--color-pistachio'),
    green:      withOpacity('--color-green')
  // }
}

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }

    return `rgb(var(${variableName})`
  }
}


module.exports = {
  mode: 'jit',
  content: ['storyblok/**/*.{vue,js}', 'pages/**/*.vue', 'assets/icons/*.svg'],
  theme: {
    container: {
      // https://tailwindcss.com/docs/container
      center: true,
      padding:  {
        DEFAULT: '20px',
        lg: '25px'
      }
    },
    screens: {
      sm:   '480px',
      md:   '768px',
      lg:   '1024px',
      xl:   '1200px',
      xxl:  '1400px',
      hd:   '1700px'
    },
    colors: {...COLOR_STYLES},
    fontFamily: {
      // hero: {
      //   new: ['Hero new', 'sans-serif'],
      //   italic: ['Hero new italic', 'serif']
      // },
      default: ['Hero new', 'sans-serif'],
      accent:  ['windsong', 'serif']
    },
    extend: {
      // textColor: { ...COLOR_STYLES },
      // backgroundColor: { ...COLOR_STYLES },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}