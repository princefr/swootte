import { useContext, useEffect } from "react"
import fr from "../localization/fr"
import ru from "../localization/ru"
import en from "../localization/en"
import zh from "../localization/zh"
import es from "../localization/es"
import { LocaleContext } from "../context/LocaleContext"
import { LocalizationContext } from "../context/LocalizationContext"




const useLocalization = () => {
    const {locale, setLocale} = useContext(LocaleContext)
    const {localization, setLocalization} = useContext(LocalizationContext)

    useEffect(() => {
        switch (locale) {
          case 'fr':
            setLocalization(fr)
            break;
          case 'ru':
            setLocalization(ru)
            break;
          case 'en':
            setLocalization(en)
            break;
          case 'zh':
            setLocalization(zh)
            break;
          case 'es':
            setLocalization(es)
            break;
          default:
            setLocalization(en)
            break;
        }
      }, [locale])

      return localization;
}


export default useLocalization