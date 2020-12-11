import React from 'react'

type propsType = {
    btnName: string
    deck?: string
}
export const Form = (props:propsType) => {
    return (
        <form className="form" action="check.php" method="post">
            <input type="text" name="name" placeholder={" enter name"}/>
            <input type="email" name="email" placeholder={" enter email"}/>
            <input type="text" name="phone" placeholder={" enter your nomber"} />
            <button type="submit" name="button" className="send send-form">{props.btnName}</button>
            {props.deck && <p>{props.deck}</p>}
        </form>

    )
}