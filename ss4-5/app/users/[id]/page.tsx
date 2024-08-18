"use client"
import React from 'react'
interface IdUser{
    id:string
}
interface Props {
  params: IdUser;
}
export default function page(props: Props) {
    const { params } = props;
  return <div>user id: {params.id}</div>;
}
