import React from 'react'
import './css/book.css'
const Book = () => {
    const images=[
        {
            url:"https://mu2.wonderbly.com/product/partner-i-love-you/preview/front/front-right?locale=en-US&product_slug=partner-i-love-you&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bfacialhairtype%5D=stubble&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bfacialhaircolour%5D=haircolour-3&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bextra%5D=glasses-round&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bname%5D=ljdf&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bgender%5D=male&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bskintone%5D=tone-2&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bhairtype%5D=short-fringe&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bhaircolour%5D=haircolour-10&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Beyecolour%5D=eyecolour-2&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bfacialhairtype%5D=stubble&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bfacialhaircolour%5D=haircolour-1&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bextra%5D=glasses-round&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bname%5D=heloo&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bgender%5D=male&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bskintone%5D=tone-1&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bhairtype%5D=short-fringe&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bhaircolour%5D=haircolour-11&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Beyecolour%5D=eyecolour-4&characters%5B0%5D%5Btype%5D=adult&cover_style=cover-iii&_q=0.8&_v=a7fcf0ca892d0b313497ccf93ecbd90ddb34a35f&_size=172.55x250.61x8.275&_sig=6LDEAUbn4N7Uj0SOd3Bu0lMl4eJeOoDiapj3BFzTobI&_width=750"
        },
        {
            url:"https://mu2.wonderbly.com/product/partner-i-love-you/preview/dedication/dedication?locale=en-US&product_slug=partner-i-love-you&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bfacialhairtype%5D=stubble&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bfacialhaircolour%5D=haircolour-3&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bextra%5D=glasses-round&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bname%5D=ljdf&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bgender%5D=male&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bskintone%5D=tone-2&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bhairtype%5D=short-fringe&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bhaircolour%5D=haircolour-10&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Beyecolour%5D=eyecolour-2&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bfacialhairtype%5D=stubble&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bfacialhaircolour%5D=haircolour-1&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bextra%5D=glasses-round&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bname%5D=heloo&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bgender%5D=male&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bskintone%5D=tone-1&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bhairtype%5D=short-fringe&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bhaircolour%5D=haircolour-11&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Beyecolour%5D=eyecolour-4&characters%5B0%5D%5Btype%5D=adult&_q=0.8&_v=a7fcf0ca892d0b313497ccf93ecbd90ddb34a35f&_size=172.55x250.61x8.275&_sig=anOpc1tOk0cE90kaV2mFS4R4j513Qv1RdWgQn_K09I0&_width=640"
        },
        {
            url:"https://mu2.wonderbly.com/product/partner-i-love-you/preview/intro/intro-left?locale=en-US&product_slug=partner-i-love-you&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bfacialhairtype%5D=stubble&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bfacialhaircolour%5D=haircolour-3&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bextra%5D=glasses-round&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bname%5D=ljdf&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bgender%5D=male&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bskintone%5D=tone-2&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bhairtype%5D=short-fringe&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bhaircolour%5D=haircolour-10&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Beyecolour%5D=eyecolour-2&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bfacialhairtype%5D=stubble&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bfacialhaircolour%5D=haircolour-1&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bextra%5D=glasses-round&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bname%5D=heloo&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bgender%5D=male&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bskintone%5D=tone-1&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bhairtype%5D=short-fringe&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bhaircolour%5D=haircolour-11&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Beyecolour%5D=eyecolour-4&characters%5B0%5D%5Btype%5D=adult&_q=0.8&_v=a7fcf0ca892d0b313497ccf93ecbd90ddb34a35f&_size=172.55x250.61x8.275&_sig=_49LXXqEScudPbVS3aXQ37JZZhlyhkoQfu1sNaHLeBg&_width=640"
        }
    ]
  return (
    <div className='book min-h-screen w-full flex items-center justify-center'>
        <div className="center w-1/2 h-full flex flex-col items-center justify-center mt-32 gap-8">
              <h2 className='text-xl caveat'>Personalize your book</h2>
              <div className="images flex flex-col gap-5">
                  {
                    images.map((image)=>{
                        return <img src={image.url} width={290}/>
                    })
                  }
              </div>
        </div>
    </div>
  )
}

export default Book