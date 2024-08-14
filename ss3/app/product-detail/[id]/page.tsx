import React from 'react'
type PropTypes = {
    params: {
        id: string
    }
}
export default function id({params}: PropTypes) {
  return <div>product id: {params.id}</div>;
}
