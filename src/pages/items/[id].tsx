// import { useRouter } from 'next/router';

// const ProductDetail = () => {
//   const router = useRouter();

//   return (
//     <div>
//       <h2>詳細詳細詳細</h2>
//     </div>
//   );
// };

// export default ProductDetail;
import Head from 'next/head';
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

// パスの構成要素を表す型 (/books/[id].tsx の id 部分など)
// (Note) Params という名前にすると曖昧なので、アクセス時のパスから抽出する
// 情報だということを示すために PathParams という名前にしています。
type PathParams = {
  id: string;
};

// ページコンポーネントに渡される props の型
// (Note) ページコンポーネント用の props であることを意識するために、
// 一般的な Props ではなく、PageProps という名前にしています。
type PageProps = {
  title: string;
  author: string;
};

// 事前生成するページのパス（URL のパラメータ部分）のリストを返します。
// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths<
  PathParams
> = async () => {
  // /books/001、/books/002、/books/003 のページを事前生成するには、
  // 次のように paths プロパティの値を設定して返します。
  // 本来は id のリストを外部 API（getBookList など）で取得します。
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '002' } },
      { params: { id: '003' } },
    ],
    fallback: false, // 上記以外のパスでアクセスした場合は 404 ページにする
  };
};

// URL のパラメータ情報（プレースホルダー部分に指定された値）をもとに、
// ページコンポーネントに渡す props データを生成します。
// context.params プロパティでこれらのパラメータを参照できるので、
// その値に応じて props データを生成して返すように実装します。
// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<PageProps> = async (
  context
) => {
  // ファイル名が [id].tsx なので id パラメーターを取り出すことができる
  const { id } = context.params as PathParams;

  // 本来はここで getBook(id) のように API を呼び出してデータを取得する
  const props: PageProps = {
    title: `Title-${id}`,
    author: `Author-${id}`,
  };

  // ページコンポーネントに渡す PageProps オブジェクトを
  // props プロパティに設定したオブジェクトを返す
  return { props };
};

// ページコンポーネントの実装
const BookPage: React.FC<PageProps> = ({
  title,
  author,
}: PageProps) => {
  return (
    <>
      <Head>
        <title>{title} の詳細ページ</title>
      </Head>
      <ul>
        <li>タイトル: {title}</li>
        <li>著者: {author}</li>
      </ul>
    </>
  );
};
export default BookPage;
