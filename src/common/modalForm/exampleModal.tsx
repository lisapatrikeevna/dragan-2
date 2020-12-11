import React, {useState} from 'react';
import cl from './modal.module.css';
import Portal from "../Portal";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";

type propsType = {
    modalHeader?: string
    modalFooter?: string
    collaps: boolean
    // onSubmitHandler: () => void
    onCansel: () => void
    children: any
}
const defaultProps: propsType = {
    modalHeader: 'some Title',
    modalFooter: '',
    collaps: false ,
    // onSubmitHandler: () => {
    // },
    onCansel: () => {    },
    children: null,
}
export const ExampleModal = (props = defaultProps) => {
const onChange=()=>{
    props.onCansel()
}
    return (
        <>{props.collaps &&
        <Portal>
            <div className={cl.ModalOverlay} >
                <div className={cl.ModalContent}>
                    <div className={cl.modalWindow}>
                        <div className={cl.modalHeader}>
                            <div className={cl.title}><h3>{props.modalHeader}</h3></div>
                            <Icon name='times' onClick={onChange} style={{float: 'right'}} />
                        </div>
                        <div className={cl.modalBody}>
                            {props.children}
                        </div>
                        <div className={cl.modalFooter}>
                            {props.modalFooter}
                            <Icon name='trash alternate' onClick={onChange} style={{float: 'right'}}  />
                            {/*<button onClick={props.onCansel} style={{float: 'right'}}>Cancel</button>*/}
                            {/*<button onClick={props.onSubmitHandler}>Submit</button>*/}
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
        }
        </>
    )
}

