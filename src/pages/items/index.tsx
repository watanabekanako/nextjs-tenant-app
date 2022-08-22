import { GetStaticProps } from 'next';
import Link from 'next/link';
// import path from 'path';
// import fs from 'fs/promises';

type Props = {
  data: { id: number; name: string }[];
};

const PortfolioPosts = (props: Props) => {
  const { data } = props;
  return (
    <div>
      <h1>商品一覧</h1>

      {data.map((v) => (
        <>
          <p>{v.id}</p>
          <p>
            <Link href={`/items/${v.id}`}>
              <a>{v.name}</a>
            </Link>
          </p>
          <button>削除する</button>
        </>
      ))}
    </div>
  );
};

export default PortfolioPosts;

// export const getStaticProps: GetStaticProps = async () => {
// const data = [
//   {
//     id: '1',
//     description: 'いちご',
//   },
//   {
//     id: '2',
//     description: 'りんご',
//   },
// ];

//   const filePath = path.join(process.cwd(), 'data', 'db.json');
//   const json = await fs.readFile(filePath);
//   const parsedJson = JSON.parse(json.toString());
//   return {
//     props: { data: parsedJson.items },
//   };
// };

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:8000/items');
  const users = await res.json();

  return {
    props: { data: users },
  };
};
