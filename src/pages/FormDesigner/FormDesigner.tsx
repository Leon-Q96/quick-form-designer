import { DndContext } from '@dnd-kit/core'
import useDragEnd from '@/hooks/useDragContext'
import FieldPanels from '@/components/Panel/FieldPanels/FieldPanels'
import FormView from '@/components/Form/FormView'
import styles from './FormDesigner.module.less'

const FormDesigner = () => {

    const { dragOverlay, ...contextProps } = useDragEnd();

    return (
        <DndContext {...contextProps}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <FieldPanels />
                </div>

                <div className={styles.center}>
                    <FormView />
                </div>
            </div>
            {dragOverlay}
        </DndContext>
    )
}

export default FormDesigner