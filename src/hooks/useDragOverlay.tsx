import { DragOverlay } from "@dnd-kit/core";
import FieldPin from "@/components/FieldPin";

const useDragOverlay = () => {

    const dragOverlay = (
        <DragOverlay>
            <FieldPin data={{}} type="SharedField" />
        </DragOverlay>
    )

    return {
        dragOverlay,
    }
}

export default useDragOverlay;