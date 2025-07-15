import { DndContext } from '@dnd-kit/core'
import FormDesigner from '@/pages/FormDesigner'

const MainPage = () => {
  return (
    <DndContext>
        <FormDesigner />
    </DndContext>
  )
}

export default MainPage