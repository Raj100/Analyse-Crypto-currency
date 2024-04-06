"use client"
import React, { useState } from 'react';

const SortableTable = () => {
  const [data, setData] = useState([
    { name: 'John', age: '25', country: 'USA' },
    { name: 'Alice', age: '30', country: 'UK' },
    { name: 'Bob', age: '20', country: 'Canada' }
  ]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filterValue.toLowerCase()) ||
    item.age.includes(filterValue) ||
    item.country.toLowerCase().includes(filterValue.toLowerCase())
  );

  const sortTable = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    const sortedData = [...filteredData].sort((a, b) => {
      const aValue = parseInt(a[key], 10);
      const bValue = parseInt(b[key], 10);
      if (aValue < bValue) {
        return direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    setData(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter..."
        value={filterValue}
        onChange={handleFilterChange}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => sortTable('name')}>
              Name {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
            </th>
            <th onClick={() => sortTable('age')}>
              Age {sortConfig.key === 'age' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
            </th>
            <th onClick={() => sortTable('country')}>
              Country {sortConfig.key === 'country' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTable;
