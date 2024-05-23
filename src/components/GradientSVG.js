function GradientSVG () {
  const idCSS = 'hello'
  const gradientTransform = `rotate(90)`
  return (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient id={idCSS} gradientTransform={gradientTransform}>
          <stop offset='27%' stopColor='#0A0A74' />
          <stop offset='50%' stopColor='#0D25AF' />
          <stop offset='91%' stopColor='#00D4FF' />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default GradientSVG
