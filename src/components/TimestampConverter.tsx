import { useState } from 'react'

export function TimestampConverter() {
  const [timestamp, setTimestamp] = useState('')
  const [timeUnit, setTimeUnit] = useState<'seconds' | 'milliseconds'>('seconds')
  
  const convertTimestamp = (ts: string) => {
    if (!ts) return ''
    try {
      const timestampNum = parseInt(ts)
      const date = new Date(timeUnit === 'seconds' ? timestampNum * 1000 : timestampNum)
      return date.toLocaleString()
    } catch {
      return 'Invalid timestamp'
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Enter Timestamp:
        </label>
        <input
          type="number"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder={timeUnit === 'seconds' ? 'e.g. 1234567890' : 'e.g. 1234567890000'}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Time Unit:
        </label>
        <div className="flex space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              checked={timeUnit === 'seconds'}
              onChange={() => setTimeUnit('seconds')}
            />
            <span className="ml-2">Seconds</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              checked={timeUnit === 'milliseconds'}
              onChange={() => setTimeUnit('milliseconds')}
            />
            <span className="ml-2">Milliseconds</span>
          </label>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Converted Date:
        </label>
        <div className="px-3 py-2 bg-gray-50 rounded-md">
          {convertTimestamp(timestamp) || 'Enter a timestamp'}
        </div>
      </div>
    </div>
  )
}