import PropTypes from 'prop-types';
import Button from './Button'
import { useLocation } from 'react-router-dom'

// CURRENTLY AT 35:10 in YouTube vid

const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation()
  console.log(location  )

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && <Button 
        onClick={onAdd} 
        text={showAdd ? 'Close' : 'Add'}
        color={showAdd ? '#f2645a' : 'green'} 
      />}
     
    </header>
  )
}



Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header