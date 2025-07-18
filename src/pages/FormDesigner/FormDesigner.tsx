import { DndContext } from '@dnd-kit/core'
import useDragOverlay from '@/hooks/useDragOverlay'
import FieldPanels from '@/components/FieldPanels/FieldPanels'
import styles from './FormDesigner.module.less'


const FormDesigner = () => {

    const { dragOverlay } = useDragOverlay();

    return (
        <DndContext>
            <div className={styles.container}>
                <div className={styles.left}>
                    <FieldPanels />
                </div>
            </div>
            {dragOverlay}
        </DndContext>
    )
}

export default FormDesigner