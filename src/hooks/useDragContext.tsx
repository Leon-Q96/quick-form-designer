import { useState } from "react";
import { DragOverlay } from "@dnd-kit/core"
import { type DragEndEvent, type DragStartEvent } from "@dnd-kit/core"
import FieldPin from "@/components/Panel/FieldPin";
import type { Widget } from "@/types/common";

interface DragContextProps {
    onDragEnd: (event: DragEndEvent) => void;
    onDragStart: (event: DragStartEvent) => void;
    dragOverlay: React.ReactNode;
}

const useDragContext = (): DragContextProps => {
    const [dragging, setDragging] = useState(false);
    const [dragData, setDragData] = useState<Widget>({} as Widget);
    

    const onDragEnd = (event: DragEndEvent) => {
        console.log('onDragEnd=============', event);
        setDragging(false);
    }

    const onDragStart = (event: DragStartEvent) => {
        const { data } = event.active.data.current as { data: Widget };
        setDragData(data);
        console.log('onDragStart=============', event);
        setDragging(true);
    }

    const dragOverlay = dragging ?(
        <DragOverlay>
            <FieldPin data={dragData} />
        </DragOverlay>
    ) : null;

    return { 
        onDragEnd, 
        onDragStart,
        dragOverlay,
    }
}

export default useDragContext;