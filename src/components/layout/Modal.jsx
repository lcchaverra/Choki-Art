import {useState, useEffect} from 'react'
import Swal from "sweetalert2";

const Modal = ({onClose}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    const countArt = localStorage.getItem("cart")
    const totalShopping = localStorage.getItem("total")
    
    useEffect(() => {
        if (countArt) {
            setCount(parseInt(countArt))
        }
        if (totalShopping) {
            setTotal(parseInt(totalShopping))
        }
        
    })

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/complete_shopping", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ username, email, phone, address, count, total }),
            });

            const data = await response.json();
            console.log(data);
            if (response.ok) {
              Swal.fire({
                icon: "success",
                title: "Validando...",
                text: "se realizó el pedido correctamente!",
              });
              setUsername("");
              setEmail("");
              setPhone("");
              setAddress("");
              setCount(0);
              setTotal(0);
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ha ocurrido un error al realizar la compra!",
              });
            }
          } catch (error) {
            console.error(error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Error en la solicitud!",
            });
          }
    }

    const closeModal = e => {
      e.stopPropagation();
      onClose();
    };

  return (
    <>
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>¿Desea Terminar su Compra?</h2>
                <p>por favor llene sus datos para completar el pedido</p>
                <form method='POST' onSubmit={handleFormSubmit}>
                    <div className="form__group field">
                        <input type="text" className="form__field" placeholder="name" name="name"
                            value={username} onChange={(e) => setUsername(e.target.value)} required />
                        <label htmlFor="Name" className="form__label">
                            Nombre Completo
                        </label>
                    </div>
                    <div className="form__group field">
                        <input type="text" className="form__field" placeholder="email" name="email"
                            value={email} onChange={e => setEmail(e.target.value)} required />
                        <label htmlFor="Email" className="form__label">
                            Email
                        </label>
                    </div>
                    <div className="form__group field">
                        <input type="text" className="form__field" placeholder="phone" name="phone"
                            value={phone} onChange={e => setPhone(e.target.value)} required />
                        <label htmlFor="Phone" className="form__label">
                            Numero de Teléfono
                        </label>
                    </div>
                    <div className="form__group field">
                        <input type="text" className="form__field" placeholder="address" name="address"
                            value={address} onChange={e => setAddress(e.target.value)} required />
                        <label htmlFor="Address" className="form__label">
                            ¿Cual es su dirección?
                        </label>
                    </div>
                <br />
                <span>Cantidad de Obras: {countArt}</span>
                <h3>Total a pagar: ${totalShopping}</h3>
                <hr />
                <button className="btn" type='submit'>Pagar</button>
                <button className="btn" type='button' onClick={onClose}>Cerrar</button>
                <h5>Todos los pagos se Realizan en Efectivo en contraentrega</h5>
                </form>
            </div>
        </div>
    </>
  )
}

export default Modal





