import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../../common/FormsControls/FormsControls';
import Modal from '../../../common/Modal/Modal';
import { useTranslation } from 'react-i18next';
import styles from '../Description.module.css';
import { required, newPassMatchInput, checkOldPass, newCannotBeOld, minLengthCreator } from '../../../../utils/validators/validators';

const EditPasswordModal = (props) => {
    const { t } = useTranslation();
    const checkPass = checkOldPass(props.password);
    const minLength8 = minLengthCreator(8);

    const submit = (values) => {
        // let obj = { 
        //     name: values.name ? values.name :  props.name,
        //     email: values.email ? values.email :  props.email,
        //     phone: values.phone && values.phone !== '+996' ? values.phone :  props.phone,
        //     faculty: values.faculty ? `/api/faculties/${values.faculty}` :  `/api/faculties/${props.faculty.id}`,
        //     avatar: props.avatar
        // }
        props.editPassword(props.id, values);
    }
    return (
        <div>
            <Modal onClose={props.toggleModalWindowEditPassword}>
                <form onSubmit={props.handleSubmit(submit)}>
                    <Field component={Input} name="oldPassword" type="password" placeholder={'Ваш старый пароль'} validate={[required, checkPass]} />
                    <Field component={Input} name="newPassword" type="password" placeholder={'Ваш новый пароль'} validate={[required, minLength8]} />
                    <Field component={Input} name="confNewPassword" type="password" placeholder={'Подтвердите новый пароль'} validate={[required, newPassMatchInput, newCannotBeOld]} />
                    <button> {props.isFetching ? <span>Загрузка...</span> : t('saveChanges')} </button>
                    {props.error && <div className={styles.successSubmit}>{props.error}</div>}
                </form>
            </Modal>
        </div>
    )
}

export default reduxForm({ form: 'editPassword' })(EditPasswordModal); 