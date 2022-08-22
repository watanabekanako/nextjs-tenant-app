import ItemList from '../../components/ItemList';
import Head from 'next/head';
import Link from 'next/link';
export default function Page() {
  return (
    <>
      <Head>
        <title>商品一覧</title>
      </Head>
      <Link href="/items/create">
        <a>新規登録</a>
      </Link>
      <ItemList />
    </>
  );
}
