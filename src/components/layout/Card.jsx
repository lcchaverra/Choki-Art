import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
const Card = ({title, price, img, category}) => {

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

    const favoriteHandle = () => {
      const currentFavorite = JSON.parse(localStorage.getItem("favorites"))
      if (currentFavorite) {
        currentFavorite.push(title)
        localStorage.setItem("favorites", JSON.stringify(currentFavorite))
      }
      toast(`la ${title} Se agregó a Favoritos!`, {
        icon: '❤️️',
      })
    }

  return (
    <>
      <Toaster/>
      <div className='grid-item' onClick={handleCounter}>
        <img className='card-img' src={img} alt={title} />
        <h4>{title}</h4>
        <span className="category">Categoria: {category}</span>
        <p>${price}</p>
        <span className="favorite" onClick={favoriteHandle}>❤️️</span>
      </div>
    </>
  )
}

export default Card