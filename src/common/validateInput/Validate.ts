export const maxLength = (max: number, value: string) => {
    return value && value.length > max
}
export const minLength = (min: number, value: string) => {
    return value.length < min
}


export const email= (value: string) => {
    return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
}

export const validate = (value: any, min: number, max: number, name: string ) => {
    if (!value) {
        return 'Required'
    }
    //
    // if (!isFinite(value)) {
    //     return 'ok, try to enter the number'
    // }

    if (minLength(min, value)) {
        return `Must be ${min} characters or more`
    }

    if(maxLength(max, value)){
        return `Must be ${max} characters or less`
    }

    if(name === 'email' && email(value)) {
        return 'Invalid email address'
    }
    return ''
}
