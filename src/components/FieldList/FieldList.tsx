import styles from './FieldList.module.less'
import FieldPin from '@/components/FieldPin'


const FieldList = () => {
    return (
        <div className={styles.container}>
            <FieldPin data={{}} type="SharedField" />
        </div>
    )
}

export default FieldList