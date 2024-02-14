import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
const Card = ({title, price, img}) => {

    const [count, setCount] = useState(0)
    const [priceTotal,setPriceTotal] = useState(0)

    const handleCounter = () => {
      const cart = localStorage.getItem("cart")
      if (cart) {
        setCount(parseInt(cart) + 1)
        localStorage.setItem("cart", (parseInt(cart) + 1).toString())
        const storageEvent = new StorageEvent("storageUpdated")
        window.dispatchEvent(storageEvent)
      }
      else {
        setCount(prevCount => prevCount + 1)
        localStorage.setItem("cart", count.toString())
        const storageEvent = new StorageEvent("storageUpdated")
        window.dispatchEvent(storageEvent)
      }
      const prevpriceTotal = parseInt(localStorage.getItem("total"))
      if (prevpriceTotal) {
        const parsePriceTotal = parseInt(prevpriceTotal)
        const newPriceTotal = parsePriceTotal + parseInt(price)
        localStorage.setItem("total", (newPriceTotal).toString())
      }
      else {
        localStorage.setItem("total", price.toString())
      }
      toast.success(`${title} añadido al carrito!`)
    }

  return (
    <>
      <Toaster/>
      <div className='grid-item' onClick={handleCounter}>
        <img className='card-img' src={img} alt={title} />
        <h4>{title}</h4>
        <p>${price}</p>
      </div>
    </>
  )
}

export default Card