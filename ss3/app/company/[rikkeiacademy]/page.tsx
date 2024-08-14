import React from 'react'
type PropTypes = {
  params: {
    name: string;
  };
};
export default function aaa({params}:PropTypes) {
  return (
    <div>company name: {params.name}</div>
  )
}
