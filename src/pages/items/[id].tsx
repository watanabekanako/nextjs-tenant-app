import Link from 'next/link';

const Post = () => {
  return (
    <>
      {/* <p>{item}</p> */}
      <h1>商品詳細画面</h1>
      <table>
        <tr>
          <td>ID:</td>
          <td>
            <input></input>
          </td>
        </tr>
        <tr>
          <td>商品名：</td>
          <td>
            <input></input>
          </td>
        </tr>
        <tr>
          <td>説明：</td>
          <td>
            <input></input>
          </td>
        </tr>
        <tr>
          <td>価格：</td>
          <td>
            <input></input>
          </td>
        </tr>
        <tr>
          <td>画像のURL：</td>
          <td>
            <input></input>
          </td>
        </tr>
      </table>
      <button>
        <Link href="../items/">
          <a>[保存]</a>
        </Link>
      </button>
      <button>
        <Link href="">
          <a>[キャンセル]</a>
        </Link>
      </button>
    </>
  );
};

export default Post;
