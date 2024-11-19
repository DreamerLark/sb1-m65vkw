import { useState } from 'react'
import './App.css'

function App() {
  const [timestamp, setTimestamp] = useState('')
  
  const convertTimestamp = (ts: string) => {
    if (!ts) return ''
    try {
      const num = parseInt(ts)
      // If timestamp is in milliseconds (13 digits), use it directly
      // If timestamp is in seconds (10 digits), multiply by 1000
      const date = new Date(num.toString().length > 10 ? num : num * 1000)
      return date.toLocaleString()
    } catch {
      return '日期格式不对 需要是linux时间戳'
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">时间转换器</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              输入linux时间戳:
            </label>
            <input
              type="number"
              value={timestamp}
              onChange={(e) => setTimestamp(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="秒或毫秒"
            />
            <p className="text-sm text-gray-500 mt-1">
              支持秒或毫秒
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              转换后日期:
            </label>
            <div className="px-3 py-2 bg-gray-50 rounded-md">
              {convertTimestamp(timestamp) || '日期输出'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App