/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            'sm': '375px',
            // => @media (min-width: 375px) { ... }

            'md': '960px',
            // => @media (min-width: 960px) { ... }

            'lg': '1440px',
            // => @media (min-width: 1440px) { ... }
        },
        extend: {
            fontFamily: {
                'figtree': 'Figtree, san-serif'
            },
            colors: {
                yellow: 'hsl(47, 88%, 63%)',

            },
            boxShadow: {
                '8xl': '4px 4px 0px 0px #000',
                '10xl': '8px 8px 0px 0px #000',
            }
        },
        colors: {
            white: 'hsl(0, 0%, 100%)',
            grey: 'hsl(0, 0%, 50%)',
            black: 'hsl(0, 0%, 7%)'
        }
    },
    plugins: [],
}

