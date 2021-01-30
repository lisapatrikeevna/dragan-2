import React, {ChangeEvent, useState} from "react";
import cl from './input.module.scss';

type inputType = {
    addInputValue: (value: string, name: string) => void
    type: string
    name: string
    placeholder: string
    validate: (value: string, min: number, max: number, name: string) => string
}
export const Input = (props: inputType) => {
    let [value, setValue] = useState<any>('');
    let [error, setError] = useState<string>('')
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setValue(e.currentTarget.value)
    }
    const alertFc = (value: string) => {
        props.addInputValue(value, props.name)
        // alert(`${value} ok, let's go further`)
    }
    const onValidate = () => {

        if (props.name === 'email') {
            const error = props.validate(value, 4, 40, 'email')
            error ? setError(error) : alertFc(value)
        }
        if (props.name === 'password') {
            const error = props.validate(value, 4, 20, 'password')
            error ? setError(error) : alertFc(value)
        }
        // if (props.name === 'firstName') {
        //     const error = props.validate(value, 3, 3, 'firstName')
        //     error ? setError(error) : alertFc(value)
        // }
    }
    const handleBlur = () => {
        onValidate()
    }
    const onKeyPressCallback = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onValidate()
        }
    }
    return (
        <div className={cl.wrapp}>
            <input type={props.type} value={value} onChange={onChangeValue}
                name={props.name} placeholder={props.placeholder}
                onBlur={handleBlur} className={!error ? cl.input : cl.errorInput}
                onKeyPress={onKeyPressCallback} autoComplete={'false'}
                />
            {error && <span className={cl.textError}>{error}</span>}
        </div>
    )
}
