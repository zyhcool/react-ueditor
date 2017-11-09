import React from 'react'

let selectStyle = {
  height: '22px',
  width: '80px',
  fontSize: '14px',
  color: 'rgba(0,0,0,.65)',
  backgroundColor: '#fff',
  border: '1px solid #d9d9d9',
  borderRadius: '4px',
  marginLeft: '10px'
}

class Select extends React.Component {
  render() {
    let {style, children, defaultValue, onChange} = this.props
    let mergedStyle = {...selectStyle, ...style}
    return <select style={mergedStyle} defaultValue={defaultValue} onChange={onChange}>{children}</select>
  }
}

export default Select