import Breadcrumbs from "@/app/components/Breadcrumbs";
import React from "react";
type PropTypes = {
  params: {
    id: string;
  };
};
export default function id({ params }: PropTypes) {
    return (
        <>
            <Breadcrumbs></Breadcrumbs>
            <div>post id: {params.id}</div>
        </>
    )
}
