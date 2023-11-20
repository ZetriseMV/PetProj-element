import React,{ FC } from 'react'

export const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, marginLeft:"200px", zIndex:"3"}}
        onClick={onClick}
      />
    );
  };

export const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, marginRight:"200px",zIndex:"3"}}
        onClick={onClick}
      />
    );
};