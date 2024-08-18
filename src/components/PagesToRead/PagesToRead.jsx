import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { getStoredReadList } from "../../utilities/localStorage";
import { useEffect, useState } from "react";
import "../../index.css";

const PagesToRead = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./books.json")
      .then((res) => res.json())
      .then((booksData) => {
        const readsData = getStoredReadList();
        const readStored = booksData.filter((book) =>
          readsData.includes(book.bookId)
        );
        setData(readStored);
      });
  }, []);

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="font-work-sans bg-[#13131308] p-6 md:p-12 lg:p-28 rounded-3xl">
      <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
        {data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="bookName" />
              <YAxis />
              <Bar
                dataKey="totalPages"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default PagesToRead;
