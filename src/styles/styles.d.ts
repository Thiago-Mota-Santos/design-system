import 'styled-components'

declare module 'styled-components'{
    export interface ThemeProps{
        colors:{
            'gray-900' : string,
            'gray-800': string,
            'gray-400': string,
            'gray-200': string,
            'gray-100': string,


            'cyan-500': string,
            'cyan-300': string,
        }
    }
}