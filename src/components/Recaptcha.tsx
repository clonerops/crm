import React, { FC, useEffect, useState } from 'react'
import http from '../services/HttpServices'

interface IProps {
    setCaptchaValue: React.Dispatch<React.SetStateAction<null | undefined>>,
    refresh: boolean
}

const Recaptcha:FC<IProps> = ({setCaptchaValue, refresh}) => {

    const [captcha, setCaptcha] = useState<string>("")

    useEffect(() => {
        const getCaptchaIsOnMount = async () => {
            const response = await http.get(`${http.auth}/GetCaptcha`)
            setCaptcha("data:image/jpeg;base64," + response?.data.image)
            setCaptchaValue(response?.data)
        }
        getCaptchaIsOnMount()
        // eslint-disable-next-line
    }, [refresh])

    const getCaptcha = async () => {
        try {
            const response = await http.get(`${http.auth}/GetCaptcha`)
            setCaptcha("data:image/jpeg;base64," + response?.data.image)
            setCaptchaValue(response?.data)
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <>
            <div className="input-group d-flex align-items-center mb-1 mt-1">
                <img
                    id="imgCaptcha"
                    className="captcha pointer"
                    alt=""
                    src={captcha}
                    style={{ height: 46, width: 150 }}
                    onClick={getCaptcha}
                />
                <div className='pointer m-2 mt-4' onClick={getCaptcha}>
                    <i className="fa-solid fa-arrows-rotate text-danger"></i>
                </div>
            </div>
        </>
    )
}

export default Recaptcha