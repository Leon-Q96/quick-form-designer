import styles from './FieldList.module.less'
import FieldPinDraggable from '@/components/FieldPin/FieldPinDraggable'


const FieldList = () => {
    return (
        <div className={styles.container}>
            <FieldPinDraggable data={{ code: '123' }} type="SharedField" />
        </div>
    )
}

export default FieldList