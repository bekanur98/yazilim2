import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';


class Modal extends React.Component {
    componentWillMount(){
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
    }
    componentWillUnmount(){
        document.body.removeChild(this.root);
    }

    render(){
        return ReactDOM.createPortal(
            <div className={styles.modalWrapper}>
                <button className={styles.btnClose} onClick={this.props.onClose}>x</button>
                {this.props.children}
            </div>,
            this.root
        )
    }
}

export default Modal;