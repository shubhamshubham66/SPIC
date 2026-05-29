import React, { useState } from 'react';
import { getGrade, calculatePercentage } from '../utils/helpers';

// Demo results data
const DEMO_RESULTS = {
  'SPIC2024001': {
    student: { name: 'Rahul Sharma', class: 'Class 12 Science', section: 'A', rollNo: '01', session: '2024-25' },
    subjects: [
      { name: 'Physics', maxMarks: 100, obtained: 92 },
      { name: 'Chemistry', maxMarks: 100, obtained: 88 },
      { name: 'Mathematics', maxMarks: 100, obtained: 95 },
      { name: 'English', maxMarks: 100, obtained: 85 },
      { name: 'Computer Science', maxMarks: 100, obtained: 96 },
    ],
  },
  '01': {
    student: { name: 'Rahul Sharma', class: 'Class 12 Science', section: 'A', rollNo: '01', session: '2024-25' },
    subjects: [
      { name: 'Physics', maxMarks: 100, obtained: 92 },
      { name: 'Chemistry', maxMarks: 100, obtained: 88 },
      { name: 'Mathematics', maxMarks: 100, obtained: 95 },
      { name: 'English', maxMarks: 100, obtained: 85 },
      { name: 'Computer Science', maxMarks: 100, obtained: 96 },
    ],
  },
  '02': {
    student: { name: 'Priya Singh', class: 'Class 10', section: 'B', rollNo: '02', session: '2024-25' },
    subjects: [
      { name: 'Science', maxMarks: 100, obtained: 96 },
      { name: 'Mathematics', maxMarks: 100, obtained: 98 },
      { name: 'English', maxMarks: 100, obtained: 90 },
      { name: 'Social Science', maxMarks: 100, obtained: 94 },
      { name: 'Hindi', maxMarks: 100, obtained: 88 },
    ],
  },
};

const Results = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);
    setLoading(true);

    setTimeout(() => {
      const found = DEMO_RESULTS[searchQuery.trim()];
      if (found) {
        setResult(found);
      } else {
        setError('No results found. Try Roll No: 01, 02, or Student ID: SPIC2024001');
      }
      setLoading(false);
    }, 1000);
  };

  const getTotalMarks = () => {
    if (!result) return { obtained: 0, total: 0 };
    const obtained = result.subjects.reduce((sum, s) => sum + s.obtained, 0);
    const total = result.subjects.reduce((sum, s) => sum + s.maxMarks, 0);
    return { obtained, total };
  };

  return (
    <div className="pt-24 md:pt-28">
      <section className="gradient-hero text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Check Results</h1>
          <p className="text-lg text-white/80">Search your examination results using Roll Number or Student ID</p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4">
        {/* Search Form */}
        <div className="card p-6 md:p-8 mb-8">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter Roll Number or Student ID (Try: 01, 02, SPIC2024001)"
                className="input-field"
                required
              />
            </div>
            <button type="submit" className="btn-primary whitespace-nowrap" disabled={loading}>
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Searching...
                </span>
              ) : 'Search Result'}
            </button>
          </form>
          {error && (
            <p className="mt-4 text-red-600 text-sm bg-red-50 p-3 rounded-lg">{error}</p>
          )}
        </div>

        {/* Result Card */}
        {result && (
          <div className="card overflow-hidden animate-fade-in">
            {/* Header */}
            <div className="gradient-hero text-white p-6 text-center">
              <h2 className="text-xl font-bold">SPIC International School</h2>
              <p className="text-sm text-white/70 mt-1">Examination Result Card - {result.student.session}</p>
            </div>

            {/* Student Info */}
            <div className="p-6 border-b bg-gray-50">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div><span className="text-gray-500">Name:</span><p className="font-semibold">{result.student.name}</p></div>
                <div><span className="text-gray-500">Class:</span><p className="font-semibold">{result.student.class}</p></div>
                <div><span className="text-gray-500">Section:</span><p className="font-semibold">{result.student.section}</p></div>
                <div><span className="text-gray-500">Roll No:</span><p className="font-semibold">{result.student.rollNo}</p></div>
              </div>
            </div>

            {/* Marks Table */}
            <div className="p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 text-sm font-semibold text-gray-600">Subject</th>
                    <th className="text-center py-3 text-sm font-semibold text-gray-600">Max Marks</th>
                    <th className="text-center py-3 text-sm font-semibold text-gray-600">Obtained</th>
                    <th className="text-center py-3 text-sm font-semibold text-gray-600">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {result.subjects.map((subject, index) => (
                    <tr key={index} className="border-b last:border-0">
                      <td className="py-3 font-medium text-gray-800">{subject.name}</td>
                      <td className="py-3 text-center text-gray-600">{subject.maxMarks}</td>
                      <td className="py-3 text-center font-semibold text-primary-600">{subject.obtained}</td>
                      <td className="py-3 text-center">
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-semibold">
                          {getGrade(subject.obtained)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 font-bold">
                    <td className="py-3">Total</td>
                    <td className="py-3 text-center">{getTotalMarks().total}</td>
                    <td className="py-3 text-center text-primary-600">{getTotalMarks().obtained}</td>
                    <td className="py-3 text-center">
                      <span className="px-2 py-0.5 bg-primary-100 text-primary-700 rounded text-xs font-semibold">
                        {calculatePercentage(getTotalMarks().obtained, getTotalMarks().total)}%
                      </span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Footer */}
            <div className="p-6 bg-gray-50 border-t flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Overall Grade: <span className="font-bold text-primary-600">{getGrade(parseFloat(calculatePercentage(getTotalMarks().obtained, getTotalMarks().total)))}</span></p>
                <p className="text-sm text-gray-500">Percentage: <span className="font-bold text-primary-600">{calculatePercentage(getTotalMarks().obtained, getTotalMarks().total)}%</span></p>
              </div>
              <button className="btn-primary text-sm py-2 px-4" onClick={() => window.print()}>
                🖨️ Print Result
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Results;

