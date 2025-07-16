import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import MainPage from "@/pages/MainPage";
import styles from './App.module.less'

function App() {

    return (
        <ConfigProvider locale={zhCN}>
            <div className={styles.fullPage}>
                <MainPage />
            </div>
        </ConfigProvider>
    )
}

export default App
