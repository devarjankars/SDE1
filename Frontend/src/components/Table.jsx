
const Table = ({ headers, data }) => (
  <table className="min-w-full bg-white">
    <thead>
      <tr>
        {headers.map(header => (
          <th key={header} className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase">{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          {Object.values(row).map((value, i) => (
            <td key={i} className="py-2 px-4 border-b border-gray-200">{value}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
