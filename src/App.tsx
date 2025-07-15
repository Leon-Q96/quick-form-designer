import './App.css'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import MainPage from "@/pages/MainPage";

function App() {

    return (
        <ConfigProvider locale={zhCN}>
            <MainPage />
        </ConfigProvider>
    )
}

export default App
