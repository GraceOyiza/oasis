import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import ArrowRight from './arrowRight';

const SuccessCard = ({ title, image, description, borderColor }) => {
  return (
    <div className="flex items-center">
      <Image className="success-card__image" width={278} height={370} src={image} alt={description} />
      <div>
        <h6 className="success-card__title relative">{ title } <span className="title-border relative block left-0 h-2 w-[12.9rem] bottom-0 my-10" style={{ background: borderColor }} /></h6>
        <div className="success-card__description">{ description }</div>
        <Link className="success-card__link flex items-center text-success" href="/about-us">Learn more <ArrowRight /></Link>
      </div>
    </div>
  )
}

export default SuccessCard;
