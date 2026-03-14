@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    font-weight: 400;
  }

  .font-serif {
    font-family: 'Libre Baskerville', Georgia, serif;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
