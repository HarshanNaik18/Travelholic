import React, { useState } from 'react'
import './PopUpCard.css'


function PopUpCard({ open, onClose, image, name, type, loc, days, price, desc, details }) {
    if (!open) return null;
    var plan = [];
    for (var i = 0; i < details.length; i++) {
        plan.push(details[i]);
    }
    var description = [];
    for (i = 0; i < desc.length; i++) {
        description.push(desc[i]);
    }

    // console.log(plan);
    return (
        <div className='popup_overlay'>
            <div className='popup_container'>
                <div className='img' style={{
                    backgroundImage: `url(${image})`
                }} />
                <div className='popup_right' >
                    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '15px' }}><p onClick={onClose} className='popup_closeBtn'>X</p></div>
                    <div className='package_popup_content'>
                        <table >
                            <tr>
                                <td className='fields'><p>Name : </p></td>
                                <td className='values'>{name}</td>
                            </tr>
                            <tr>
                                <td className='fields'><p>Type : </p></td>
                                <td className='values'>{type}</td>
                            </tr>
                            <tr>
                                <td className='fields'><p>Location : </p></td>
                                <td className='values'>{loc}</td>
                            </tr>
                            <tr>
                                <td className='fields'><p>No of Days : </p></td>
                                <td className='values'>{days}</td>
                            </tr>
                            <tr>
                                <td className='fields'><p>Price : </p></td>
                                <td className='values'>{price}</td>
                            </tr>
                        </table>
                        <div className='details'><p>Description : </p>
                            <h2>
                                {
                                    description.reduce((result, current) => {
                                        if (current === '`') {
                                            result.push(<h6><br /></h6>);
                                        }
                                        else {
                                            result.push(<span>{current}</span>);
                                        }
                                        return result;
                                    }, [])
                                }
                            </h2></div>
                        <div className='details'><p>Plans : </p><h2>
                            {
                                plan.reduce((result, current) => {
                                    if (current === '`') {
                                        result.push(<h6><br /></h6>);
                                    }
                                    else {
                                        result.push(<span>{current}</span>);
                                    }
                                    return result;
                                }, [])
                            }
                        </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUpCard
