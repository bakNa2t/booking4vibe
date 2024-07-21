import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
  &, &.light-mode {
      /* secondary colors */
    --color-emerald-0: #f9fefc;
    --color-emerald-50: #ecfdf5;
    --color-emerald-100: #d1fae5;
    --color-emerald-200: #a7f3d0;
    --color-emerald-300: #6ee7b7;
    --color-emerald-400: #34d399;
    --color-emerald-500: #10b981;
    --color-emerald-600: #059669;
    --color-emerald-700: #047857;
    --color-emerald-800: #065f46;
    --color-emerald-900: #064e3b;

    /* ultramarin blue */
    --color-blue-100: #bfd0fe;
    --color-blue-700: #1e2fd7;
    /* neon green */
    --color-green-100: #a9ff90;
    --color-green-700: #0f8b00;
    --color-yellow-100: #fef9c3;
    --color-yellow-700: #a16207;
    --color-silver-100: #e5e7eb;
    --color-silver-700: #374151;
    /* bright indigo  */
    --color-indigo-100: #d9cdff;
    --color-indigo-700: #6f00fe;
    /* neon carrot */
    --color-orange-100: #ffdca8;
    --color-orange-700: #c64a08;
    /* Danger: red color */ 
    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    --backdrop-color: rgba(255, 255, 255, 0.1);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
    
    --image-grayscale: 0;
    --image-opacity: 100%;
  }

  &.dark-mode{
    --color-emerald-0: #064e3b;
    --color-emerald-50: #065f46;
    --color-emerald-100: #047857;
    --color-emerald-200: #059669;
    --color-emerald-300: #10b981;
    --color-emerald-400: #34d399;
    --color-emerald-500: #6ee7b7;
    --color-emerald-600: #a7f3d0;
    --color-emerald-700: #d1fae5;
    --color-emerald-800: #ecfdf5;
    --color-emerald-900: #f9fefc;
    
    /* ultramarin blue */
    --color-blue-100: #1e2fd7;
    --color-blue-700: #bfd0fe;
    /* neon green */
    --color-green-100: #0f8b00;
    --color-green-700: #a9ff90;
    --color-yellow-100: #854d0e;
    --color-yellow-700: #fef9c3;
    --color-silver-100: #374151;
    --color-silver-700: #f3f4f6;
    /* bright indigo  */
    --color-indigo-100: #6f00fe;
    --color-indigo-700: #d9cdff;
    /* neon carrot */
    --color-orange-100: #c64a08;
    --color-orange-700: #ffdca8;
    /*Danger: red color*/ 
    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;
    
    --backdrop-color: rgba(0, 0, 0, 0.3);
    
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);
    
    --image-grayscale: 10%;
    --image-opacity: 90%;
  }

  /* base colors */
  --color-brand-50:#fff8e2;
  --color-brand-100: #fff1c0;
  --color-brand-200: #ffe888;
  --color-brand-300: #ffe044;
  --color-brand-400: #ffe10d;
  --color-brand-500: #f5eb00;
  --color-brand-600: #c5c400;
  --color-brand-700: #959500;
  --color-brand-800: #737000;
  --color-brand-900: #616106;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-emerald-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-emerald-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}
`;

export default GlobalStyles;
