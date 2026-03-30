export const projects = [
  {
    title: "Stock Portfolio Backtester",
    description:
      "A Python-based backtesting engine that fetches historical market data via Yahoo Finance, applies rule-based portfolio weighting strategies (equal-weight with max cap, optional performance tilt), and benchmarks against SPY and AGG.",
    commentary:
      "This project deepened my understanding of portfolio construction and quantitative evaluation. I explored how simple rule-based allocation strategies compare against standard benchmarks, and learned a lot about handling real-world financial time-series data with pandas.",
    tags: ["Python", "yfinance", "pandas", "NumPy", "matplotlib"],
    github: "https://github.com/yourusername/portfolio-backtester",
    live: null,
    image: null,
  },
  {
    title: "Trade Charts",
    description:
      "An interactive trading chart visualization built with React and Recharts. Designed to render candlestick-style data, technical indicators, and volume overlays in a responsive, real-time dashboard.",
    commentary:
      "I wanted a lightweight, customizable charting solution instead of relying on heavy third-party embeds. This was a great exercise in React component architecture and working with Recharts' composable API for financial data viz.",
    tags: ["React", "Vite", "Recharts", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/yourusername/trade-charts",
    live: null,
    image: null,
  },
  {
    title: "ML Learning Journal",
    description:
      "A static blog documenting my machine learning explorations — covering topics from supervised learning fundamentals to neural network experiments, complete with code snippets and reflections.",
    commentary:
      "Writing about what I learn has been one of the best ways to solidify concepts. This journal started as personal notes and grew into a public resource. Built with vanilla HTML/CSS/JS and marked.js for Markdown rendering.",
    tags: ["HTML/CSS", "JavaScript", "Markdown", "Machine Learning"],
    github: "https://github.com/StrawbunnySunny/ML-Learning-Blog",
    live: "https://strawbunnysunny.github.io/ML-Learning-Blog/",
    image: null,
  },
];
