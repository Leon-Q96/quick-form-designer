import { useDroppable } from "@dnd-kit/core";
import styles from "./DropBody.module.less";

const DropBody = () => {

    const { setNodeRef } = useDroppable({
        id: 'droppable',
    })

    return (
        <div ref={setNodeRef} className={styles.container}>
            
        </div>
    )
}

export default DropBody