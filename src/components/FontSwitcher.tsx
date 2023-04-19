import { useState } from 'react'

export const FontSwitcher = () => {
  const [fontFamily, setFontFamily] = useState('')

  const saveFontValue = () => {
    try {
      const url = `https${fontFamily.replace(/[^]*(https|http)/gi, '').replace(/('|").*/gi, '')}`
      const family = url.replace(/[^]*family=/gi, '').replace(/&.*/gi, '').replaceAll('+', ' ')
      document.querySelector('body').style.fontFamily = `"${family}"`
      let styles = document.querySelector('#customFont')
      let isCustomFontWasSet = styles !== null

      if (!isCustomFontWasSet) {
        styles = document.createElement('link')
      }

      styles.setAttribute('href', url)

      if (!isCustomFontWasSet) {
        styles.setAttribute('id', 'customFont')
        styles.setAttribute('rel', 'stylesheet')
        document.head.appendChild(styles)
      }
    } catch (error) {
      console.error('Лажа какая-то')
    }
  }

  return (
    <div>
      <h1>Hello, Привет</h1>
      <textarea value={fontFamily} onInput={(e) => setFontFamily(e.currentTarget.value)} />
      <button onClick={saveFontValue}>Set</button>
    </div>
  )
}
