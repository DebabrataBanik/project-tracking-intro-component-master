function Navigation({
  hamState
}) {
  return (
    <nav className={`navigation ${hamState ? 'display' : ''}`}>
      <ul>
        <li><a href="#">PRODUCT</a></li>
        <li><a href="#">FEATURES</a></li>
        <li><a href="#">PRICING</a></li>
      </ul>
      <span></span>
      <a href="#" className="login">LOGIN</a>
    </nav>
  )
}

export default Navigation