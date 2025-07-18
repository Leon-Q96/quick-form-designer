import styles from './FieldList.module.less'
import FieldPinDraggable from '@/components/Panel/FieldPin/FieldPinDraggable'
import type { Widget } from '@/types/common'

interface FieldListProps {
    fields: Widget[]
    type: 'base' | 'business' | 'custom'
}

const FieldList: React.FC<FieldListProps> = (props) => {
    const { fields } = props

    return (
        <div className={styles.container}>
            {fields.map((field) => (
                <div key={field.code} className={styles.fieldItem}>
                    <FieldPinDraggable data={field}/>
                </div>
            ))}
        </div>
    )
}

export default FieldList