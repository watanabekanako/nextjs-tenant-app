// const Button = () => {
//   return (
//     <div>
//       <button>詳細はこちら</button>
//       <button>削除する</button>
//     </div>
//   );
// };
// export default Button;
import Link from 'next/link';
import React from 'react';
import { GetStaticProps } from 'next';

type Book = {
  id: string;
  title: string;
};
// 商品のオプション
// type Option = {
//   // 識別子
//   id: number;
//   // オプションの名前
//   name: string;
//   // オプションの説明
//   description: string;
//   // オプションの価格
//   price: number;
// };
// 商品
type Item = {
  // 識別子
  id: number;
  // 商品名
  name: string;
  // 商品の説明
  description: string;
  // 商品の価格
  price: number;
  // 商品画像のURL
  imageUrl: string;
  // 削除フラグ
  deleted: boolean;
  // 商品に付随するオプション
  //   options: Option[];
};
// ページコンポーネントに渡されるデータ
type Props = {
  items: Item[];
};

// この関数がビルド時に呼び出され、戻り値の props の値がページコンポーネントに渡される
export const getStaticProps: GetStaticProps<Props> = async (
  context
) => {
  // 本来は、ここで外部 API などを呼び出してデータを取得する
  const items = [
    {
      id: 1,
      name: 'Item-1',
      description: 'aaa',
      price: 100,
      imageUrl: 'aaa',
      deleted: false,
    },
    {
      id: 2,
      name: 'Items-2',
      description: 'aaa',
      price: 200,
      imageUrl: 'bbb',
      deleted: false,
    },
    {
      id: 3,
      name: 'Item-3',
      description: 'aaa',
      price: 300,
      imageUrl: 'ccc',
      deleted: false,
    },
  ];

  // この props プロパティの値がページコンポーネントに渡される
  return { props: { items } };
};

// ページコンポーネントの実装
const ItemsPage: React.FC<Props> = ({ items }) => (
  <>
    <h2>商品一覧</h2>
    <ul>
      {items.map((item) => (
        <>
          <p>{item.id}</p>
          <p>{item.name}</p>
          <p>{item.description}</p>
          <button>詳細はこちら</button>
          <button>削除する</button>
        </>
      ))}
    </ul>
  </>
);
export default ItemsPage;
