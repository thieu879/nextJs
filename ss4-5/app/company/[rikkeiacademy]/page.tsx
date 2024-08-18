"use client"
import React from 'react'
interface NameTypes {
  rikkeiacademy: string;
}
type PropTypes = {
  params: NameTypes
};
export default function aaa(props:PropTypes) {
  console.log(props);
  const {params} = props
  return <div>company name: <b>{params.rikkeiacademy}</b></div>;
}
