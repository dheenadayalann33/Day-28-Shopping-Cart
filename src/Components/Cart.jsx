import React, { useContext } from 'react';
import { mycontext } from '../App';
import Images from './Images';

function Cart() {
    const [data, setData] = useContext(mycontext)
    const totalPrice = data.reduce((total, data) => total + data.price * (data.quantity || 1), 0);
    const totalQuantity = data.reduce((total, data) => total + (data.quantity || 1), 0);
    const handleInc = (id, quantity) => {
        setData(curr => {
            return curr.map((element) => {
                if (element.id === id) {
                    return { ...element, quantity: (element.quantity + 1 || quantity + 1) }
                }
                return element
            })
        })

    }
    const handleDec = (id, quantity) => {
        setData(curr => {
            return curr.map((element) => {
                if (element.id === id && quantity > 0) {
                    return { ...element, quantity: (element.quantity - 1 || quantity - 1) }
                }
                return element
            })
        })
    }

    const handelDelet = (id) => {
        setData(data.filter(element => element.id !== id))
    }
    return (
        <>
            <div className='container'>
                {
                    data.map((element, index) => {
                        return (
                            <div key={index} className='container m-5 card'>
                                <div className='row card-body'>
                                    <div className='col-4'>
                                        <Images element = {element}/>
                                    </div>
                                    <div className='col-8'>
                                        <div className='row'>
                                            <div className='col-8'>
                                                <h4>{element.title}</h4>
                                                <p>{element.description}</p>
                                            </div>
                                            <div className='col-2'>
                                                <button className='btn ' onClick={() => handleInc(element.id, element.quantity || 1)}>+</button>
                                                <span>{ (element.quantity|| 1)}</span>
                                                <button className='btn ' onClick={() => handleDec(element.id, element.quantity || 1)}>-</button>
                                            </div>
                                            <div className='col-2'>
                                                <h5>{element.price * (element.quantity || 1)}</h5>
                                                <div className='mt-5'>
                                                    <button className='btn btn-outline-warning' onClick={() => handelDelet(element.id)}>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <hr />
                <div className='container m-5'>
                    <div className='row'>
                        <div className='col-8'>
                            <h6>Total Quanity</h6>
                            <h6>Sub-Total</h6>
                            <h6>Addtional Charges</h6>
                            <hr />
                            <h5>Total Price</h5>
                        </div>
                        <div className='col-4 text-center'>
                            <h6>{totalQuantity} Items</h6>
                            <h6>₹ {totalPrice}</h6>
                            <h6>₹ 0</h6>
                            <hr />
                            <h5>₹ {totalPrice}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;