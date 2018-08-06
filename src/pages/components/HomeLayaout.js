import React from 'react'
import PropTypes from 'prop-types'
import './homeLayout.css';
const HomeLayout = (props) => {
  return (
    <section className="HomeLayout">
        {props.children}
    </section>
  )
}

HomeLayout.propTypes = {

}

export default HomeLayout
