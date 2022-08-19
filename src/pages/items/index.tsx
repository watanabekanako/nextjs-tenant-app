import { GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs/promises';

type Props = {
  data: { id: number; name: string }[];
};

const PortfolioPosts = (props: Props) => {
  const { data } = props;
  return (
    <div>
      <h1>商品一覧</h1>
      <ul>
        {data.map((v) => (
          <>
            <p>{v.id}</p>
            <p>{v.name}</p>

            <button>詳細はこちら</button>
            <button>削除する</button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioPosts;

export const getStaticProps: GetStaticProps = async () => {
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

  const filePath = path.join(process.cwd(), 'data', 'db.json');
  const json = await fs.readFile(filePath);
  const parsedJson = JSON.parse(json.toString());
  return {
    props: { data: parsedJson.items },
  };
};
