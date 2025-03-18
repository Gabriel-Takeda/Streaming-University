import { enUS, ptBR } from './modules'

type LocalesType = Record<'en-US' | 'pt-BR', any>;

const locales: LocalesType = {
    'en-US': enUS,
    'pt-BR': ptBR,
}

export default locales
