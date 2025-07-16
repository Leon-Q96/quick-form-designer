import { DndContext } from '@dnd-kit/core'
import FormDesigner from '@/pages/FormDesigner'
import styles from './MainPage.module.less'

const MainPage = () => {
  return (
    <DndContext>
        <div className={styles.container}>
            <FormDesigner />
        </div>
    </DndContext>
  )
}

export default MainPage;