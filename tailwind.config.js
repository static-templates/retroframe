/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    safelist: [ 
        'bg-autumn-light', 'bg-autumn-mid-light', 'bg-autumn-mid-dark', 'bg-autumn-dark', 'text-autumn-mid-light',
        'bg-candy-light', 'bg-candy-mid-light', 'bg-candy-mid-dark', 'bg-candy-dark', 'text-candy-mid-light',
        'bg-cool-light', 'bg-cool-mid-light', 'bg-cool-mid-dark', 'bg-cool-dark', 'text-cool-mid-light',
        'bg-grayscale-light', 'bg-grayscale-mid-light', 'bg-grayscale-mid-dark', 'bg-grayscale-dark', 'text-grayscale-mid-light',
        'bg-pastel-light', 'bg-pastel-mid-light', 'bg-pastel-mid-dark', 'bg-pastel-dark', 'text-pastel-mid-light',
        'bg-sand-and-sea-light', 'bg-sand-and-sea-mid-light', 'bg-sand-and-sea-mid-dark', 'bg-sand-and-sea-dark', 'text-sand-and-sea-mid-light',
        'bg-vibrant-light', 'bg-vibrant-mid-light', 'bg-vibrant-mid-dark', 'bg-vibrant-dark', 'text-vibrant-mid-light',
    ],
    theme: {
        extend: {
            colors: {
                // https://coolors.co/4a3544-bb855f-d9be74-f3efe2
                autumn : {
                    light: '#f5f1e5',
                    "mid-light": '#e3c476',
                    "mid-dark": '#cd8c65',
                    dark: '#583b4e'
                },
                candy : {
                    light: '#FFEFF1',
                    "mid-light": '#FFC4D1',
                    "mid-dark": '#D3227A',
                    dark: '#321032'
                },
                cool : {
                    light: '#eafcff',
                    "mid-light": '#BFEDFF',
                    "mid-dark": '#74B7FF',
                    dark: '#12284B'
                },
                grayscale: {
                    light: '#fafdff',
                    "mid-light": '#e1e3ef',
                    "mid-dark": '#9898af',
                    dark: '#090913'
                },
                pastel: {
                    light: '#EFF9FF',
                    "mid-light": '#FFD7FF',
                    "mid-dark": '#ADFFEB',
                    dark: '#ECEE81'
                },
                "sand-and-sea" : {
                    light: '#F8F0E5',
                    "mid-light": '#EADBC8',
                    "mid-dark": '#DAC0A3',
                    dark: '#0F2C59'
                },
                vibrant: {
                    light: '#FFFFFF',
                    "mid-light": '#FF6AC2',
                    "mid-dark": '#B931FC',
                    dark: '#5D12D2'
                }
            },
          },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}