import './Header.css'

export function Header({ children }) {
  return (
    <header className="header">
      {children}
      <h1 className='header__title'>Make your own Valentine’s Cards </h1>
    </header>
  )

}