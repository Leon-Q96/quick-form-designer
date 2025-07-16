import FieldPanels from '@/components/FieldPanels/FieldPanels'
import styles from './FormDesigner.module.less'

const FormDesigner = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <FieldPanels />
        </div>
    </div>
  )
}

export default FormDesigner