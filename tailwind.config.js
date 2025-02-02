/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            colors: {
                primary: '#D97706',  // amber[600]
                secondary: '#1E293B', // slate[800]
                red: '#DC2626',      // red[600]
                yellow: '#EAB308',   // yellow[500]
            },
            // use Roboto Font
            fontFamily:{
                sans: ['Inter', 'sans-serif'],
            },
            container:{
                center: true,
                padding: {
                    DEFAULT:'1.5rem',
                    lg: '4rem',
                    xl: '4rem',
                    '2xl': '4rem',
                },
                screen: {
                    sm: '576px',
                    md: '768px',
                    lg: '992px',
                    xl: '1200px',
                    '2xl': '1400px'
                }
            }
        }
    },
    plugins: []
}