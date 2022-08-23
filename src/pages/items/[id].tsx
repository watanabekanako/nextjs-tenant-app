import { useRouter } from 'next/router';
import Link from 'next/link';

const Post = () => {
  const router = useRouter();
  const { item } = router.query;

  return (
    <>
      <h1>商品詳細画面</h1>
      {/* <p>商品詳細</p> */}
      <button>
        <Link href="../items/">
          <a>[保存]</a>
        </Link>
      </button>
    </>
  );
};

export default Post;
