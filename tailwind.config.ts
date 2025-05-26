import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				navy: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
				},
				electric: {
					400: '#60a5fa',
					500: '#3b82f6',
					600: '#2563eb',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
					'50%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' }
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float3d': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotateX(0deg) rotateY(0deg)'
					},
					'25%': { 
						transform: 'translateY(-10px) rotateX(2deg) rotateY(1deg)'
					},
					'50%': { 
						transform: 'translateY(-20px) rotateX(0deg) rotateY(-1deg)'
					},
					'75%': { 
						transform: 'translateY(-10px) rotateX(-2deg) rotateY(1deg)'
					}
				},
				'morphing': {
					'0%, 100%': {
						borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
						transform: 'rotate(0deg) scale(1)'
					},
					'25%': {
						borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
						transform: 'rotate(90deg) scale(1.1)'
					},
					'50%': {
						borderRadius: '50% 60% 30% 60% / 30% 60% 70% 40%',
						transform: 'rotate(180deg) scale(0.9)'
					},
					'75%': {
						borderRadius: '60% 40% 60% 40% / 70% 30% 60% 40%',
						transform: 'rotate(270deg) scale(1.05)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'scale-in-rotate': {
					'0%': {
						transform: 'scale(0) rotate(-180deg)'
					},
					'100%': {
						transform: 'scale(1) rotate(0)'
					}
				},
				'text-glow': {
					'0%, 100%': {
						textShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
					},
					'50%': {
						textShadow: '0 0 20px rgba(59, 130, 246, 0.8)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'float3d': 'float3d 6s ease-in-out infinite',
				'morphing': 'morphing 8s ease-in-out infinite',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'scale-in-rotate': 'scale-in-rotate 0.6s ease-out',
				'text-glow': 'text-glow 2s ease-in-out infinite'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			perspective: {
				'1000': '1000px',
				'1500': '1500px',
			},
			transform: {
				'preserve-3d': 'preserve-3d',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
